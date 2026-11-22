import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);

  // Credenciais vêm do ambiente; nunca devem ser versionadas no código.
  private readonly smtpUser = process.env.SMTP_USER;
  private readonly frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:8080';

  private readonly transporter = this.smtpUser
    ? nodemailer.createTransport({
        service: process.env.SMTP_SERVICE ?? 'gmail',
        auth: {
          user: this.smtpUser,
          pass: process.env.SMTP_PASS,
        },
      })
    : null;

  async sendPasswordReset(email: string, token: string) {
    const link = `${this.frontendUrl}/alterar`;

    if (!this.transporter) {
      this.logger.warn(
        `SMTP não configurado (SMTP_USER vazio). Token de redefinição para ${email}: ${token}`,
      );
      return;
    }

    await this.transporter.sendMail({
      from: `"Sistema Biblioteca" <${this.smtpUser}>`,
      to: email,
      subject: '📚 Redefinição de Senha - Sistema Biblioteca',
      html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Olá!</h2>
        <p>Recebemos uma solicitação para redefinir sua senha no <strong>Sistema Biblioteca</strong>.</p>
        <p>Para continuar com o processo, copie o token abaixo e utilize na página de alteração:</p>

        <div style="background-color: #f1f1f1; padding: 10px; border-radius: 5px; font-size: 18px; margin: 10px 0;">
          <strong>${token}</strong>
        </div>

        <p>Ou clique no botão abaixo para acessar diretamente a página de alteração:</p>
        <p><a href="${link}" target="_blank" style="color: #4CAF50;">${link}</a></p>

        <p style="font-size: 12px; color: #777;">⚠️ Este token é válido por 30 minutos.</p>
      </div>
    `,
    });
  }
}
