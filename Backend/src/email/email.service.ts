import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'luizfdvgervazio@gmail.com',
      pass: 'pdqa fxfw eppi noip', // senha de app
    },
  });

  async sendPasswordReset(email: string, token: string) {
  const link = `http://localhost:4200/alterar`;

  await this.transporter.sendMail({
    from: '"Sistema Biblioteca 👨‍🏫" <luizfdvgervazio@gmail.com>',
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
