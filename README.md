# SGB — Sistema de Gestão de Biblioteca

Aplicação web para administrar o acervo e a circulação de uma biblioteca: livros, autores,
clientes e empréstimos, com controle de prazo, atraso e disponibilidade.

Frontend em **Angular 19** consumindo uma **API REST em NestJS**, com persistência via
**Prisma** sobre **PostgreSQL** e autenticação por **JWT**.

## Funcionalidades

**Acervo**

- Cadastro, edição e exclusão de livros, com título, editora, ano, gênero e número de páginas
- Relação muitos-para-muitos entre livros e autores
- Indicador de disponibilidade mantido pelo fluxo de empréstimo

**Autores e clientes**

- Cadastro de autores e dos livros vinculados a cada um
- Cadastro dos clientes da biblioteca

**Empréstimos**

- Registro de empréstimo e devolução, com data de saída e data prevista de retorno
- Marcação de atraso e status do empréstimo
- Módulo de e-mail para notificações

**Autenticação e acesso**

- Login com JWT
- Senhas armazenadas com hash BCrypt
- Tipo de usuário para diferenciar níveis de acesso
- Validação das entradas nos DTOs com `class-validator`

## Stack

| Camada | Tecnologias |
| --- | --- |
| Frontend | Angular 19, TypeScript, RxJS |
| Backend | NestJS, TypeScript |
| Persistência | Prisma ORM, PostgreSQL |
| Autenticação | `@nestjs/jwt`, bcryptjs |
| Apoio | class-validator, class-transformer, date-fns, Nodemailer |
| Testes | Jest (unitários e e2e) |

## Modelo de dados

| Modelo | Papel |
| --- | --- |
| `Usuario` | credenciais de acesso e tipo de usuário |
| `Cliente` | quem retira livros emprestados |
| `Autor` | relação muitos-para-muitos com `Livro` |
| `Livro` | dados do exemplar e disponibilidade |
| `Emprestismo` | liga `Livro` e `Cliente`, com datas, atraso e status |

## Estrutura

```text
Backend/                   API NestJS
  prisma/schema.prisma     modelos do banco
  src/auth/                autenticação e JWT
  src/livro/               acervo
  src/autor/               autores
  src/cliente/             clientes
  src/emprestismo/         empréstimos e devoluções
  src/email/               envio de e-mail
  src/database/            acesso ao Prisma
project-biblioteca-att/    aplicação Angular
```

## Como rodar

Pré-requisitos: Node.js, PostgreSQL e Angular CLI.

### Backend

```bash
cd Backend
npm install

# defina DATABASE_URL (PostgreSQL) em um arquivo .env
npx prisma migrate dev

npm run start:dev
```

### Frontend

```bash
cd project-biblioteca-att
npm install
ng serve
```

A aplicação fica disponível em `http://localhost:4200`.

## Testes

```bash
cd Backend
npm test          # unitários
npm run test:e2e  # ponta a ponta
```
