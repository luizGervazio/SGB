import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { randomUUID } from 'crypto';
import { addMinutes } from 'date-fns';
import { PrismaService } from '../database/prisma.service';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async validateUser(email: string, senha: string) {
    const user = await this.usuarioService.findByEmail(email);
    if (user && await bcrypt.compare(senha, user.senha)) {
      const { senha, ...resto } = user;
      return resto;
    }
    throw new UnauthorizedException('Email ou senha inválidos');
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email, tipo: user.tipo };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async forgotPassword(email: string) {
    const user = await this.usuarioService.findByEmail(email);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const token = randomUUID();
    const expiresAt = addMinutes(new Date(), 30);

    await this.prisma.passwordReset.create({
      data: {
        email,
        token,
        expiresAt,
      },
    });

    const resetLink = `${token}`;

    await this.emailService.sendPasswordReset(email, resetLink);

    return { message: 'Link de recuperação enviado por e-mail' };
  }

  async resetPassword(token: string, novaSenha: string) {
    const resetEntry = await this.prisma.passwordReset.findUnique({
      where: { token },
    });

    if (!resetEntry || resetEntry.expiresAt < new Date()) {
      throw new UnauthorizedException('Token inválido ou expirado');
    }

    const senhaCriptografada = await bcrypt.hash(novaSenha, 10);

    await this.prisma.usuario.updateMany({
      where: { email: resetEntry.email },
      data: { senha: senhaCriptografada },
    });

    await this.prisma.passwordReset.delete({
      where: { token },
    });

    return { message: 'Senha redefinida com sucesso' };
  }
}
