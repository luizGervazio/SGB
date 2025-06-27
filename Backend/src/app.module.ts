import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroModule } from './livro/livro.module';
import { EmprestismoModule } from './emprestismo/emprestismo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { AutorModule } from './autor/autor.module';
import { PrismaService } from './database/prisma.service';
import { AuthModule } from './auth/auth.module';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    LivroModule,
    ClienteModule,
    UsuarioModule,
    EmprestismoModule,
    AutorModule,
    AuthModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService,PrismaService, EmailService],
})
export class AppModule {}
