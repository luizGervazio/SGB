import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroModule } from './livro/livro.module';
import { EmprestismoModule } from './emprestismo/emprestismo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { AutorModule } from './autor/autor.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [
    LivroModule,
    ClienteModule,
    UsuarioModule,
    EmprestismoModule,
    AutorModule,
  ],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
