import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      secret: 'JWT_SECRET_KEY_TROQUE_ISSO',
      signOptions: { expiresIn: '1h' },
    }),
    EmailModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService], // ✅ Adicionado aqui!
})
export class AuthModule {}
