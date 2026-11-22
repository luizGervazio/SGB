# SGB — Sistema de Gestão de Biblioteca

Aplicação web para administrar o acervo e a circulação de uma biblioteca: livros, autores,
clientes e empréstimos, com controle de prazo, atraso e disponibilidade.

Frontend em **Angular 19** servido por **Nginx**, consumindo uma **API REST em NestJS**, com
persistência via **Prisma** sobre **SQLite** (em volume Docker nomeado) e autenticação por **JWT**.
Os contêineres seguem práticas de **hardening** (usuário não-root, sistema de arquivos
somente-leitura, sem capabilities do kernel) e o Dockerfile da API passa no linter **Hadolint**.

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
- Módulo de e-mail para recuperação de senha

**Autenticação e acesso**

- Login com JWT
- Senhas armazenadas com hash BCrypt
- Tipo de usuário para diferenciar níveis de acesso
- Validação das entradas nos DTOs com `class-validator`

## Stack

| Camada | Tecnologias |
| --- | --- |
| Frontend | Angular 19, TypeScript, RxJS, Nginx |
| Backend | NestJS, TypeScript |
| Persistência | Prisma ORM, SQLite |
| Autenticação | `@nestjs/jwt`, bcryptjs |
| Infraestrutura | Docker, Docker Compose, Hadolint |
| Apoio | class-validator, class-transformer, date-fns, Nodemailer |
| Testes | Jest (unitários e e2e) |

## Arquitetura dos contêineres

```text
 navegador ──► :8080  frontend_web (nginx-unprivileged)
                        │  /       → arquivos do Angular
                        │  /api/*  → proxy
                        ▼
                      backend_api (node:22-alpine, appuser)   ← sem porta no host
                        │
                        ▼
                      volume nomeado sqlite_data → /app/data/app.db
```

A API só é acessível pela rede interna do Compose; o único ponto de entrada externo é o Nginx.

## Hardening aplicado

### `api/Dockerfile`

| Requisito | Implementação |
| --- | --- |
| Imagem base enxuta | `node:22-alpine`, build multi-stage (ferramentas de build não vão para a imagem final) |
| Grupo não-privilegiado | `addgroup -S -g 10001 appgroup` |
| Usuário não-root | `adduser -S -D -H -u 10001 -G appgroup -s /sbin/nologin appuser` |
| Isolamento de diretórios | `/app/data` criado com `chown appuser:appgroup` e `chmod 0700`; código e `node_modules` pertencem ao root (só leitura para o appuser) |
| `USER` ativo | `USER 10001:10001` (appuser:appgroup) antes do `CMD`; UID numérico conforme a regra DL3066 do Hadolint, e `whoami` continua retornando `appuser` |

### `docker-compose.yml` (serviço `api`)

| Requisito | Implementação |
| --- | --- |
| Raiz somente-leitura | `read_only: true` — só o volume `sqlite_data` em `/app/data` aceita escrita |
| Sem capabilities | `cap_drop: [ALL]` |
| Sem elevação de privilégio | `security_opt: [no-new-privileges:true]` |
| Temporário em RAM | `tmpfs: [/tmp]` |

O frontend recebe os mesmos controles e roda com a imagem oficial `nginx-unprivileged`.

## Como rodar com Docker

Pré-requisito: Docker Desktop (no Windows, com WSL 2 instalado).

```bash
docker compose up -d --build
```

Acesse `http://localhost:8080`.

O sistema não tem tela de cadastro de usuário; crie o primeiro pelo endpoint da API
(PowerShell):

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:8080/api/usuario -ContentType 'application/json' `
  -Body '{"email":"admin@sgb.local","nome":"Admin","senha":"admin123","tipo":"admin"}'
```

Variáveis opcionais (arquivo `.env` na raiz, lido pelo Compose): `JWT_SECRET`, `SMTP_USER`,
`SMTP_PASS`. Sem SMTP configurado, o token de recuperação de senha aparece no log da API
(`docker logs backend_api`).

## Roteiro de demonstração

Com os contêineres no ar, o script abaixo executa todos os testes e salva os logs em
`evidencias/`:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\validar-hardening.ps1
```

Ou manualmente:

**1. Quality Gate — Hadolint** (no PowerShell o `<` não existe; use `Get-Content`):

```bash
docker run --rm -i hadolint/hadolint < api/Dockerfile
```

```powershell
Get-Content -Raw api\Dockerfile | docker run --rm -i hadolint/hadolint
```

Esperado: nenhuma saída e exit code 0. Logs reais da execução ficam em `evidencias/`.

**2. Usuário non-root**

```bash
docker exec -it backend_api whoami
```

Esperado: `appuser`.

**3. Sistema de arquivos somente-leitura**

```bash
docker exec -it backend_api touch /teste.txt
```

Esperado: `touch: /teste.txt: Read-only file system`.

**4. Gravação no volume do SQLite**

Cadastre autores, livros ou clientes pelo frontend e confira que o banco cresce:

```bash
docker exec -it backend_api ls -la /app/data
```

## Desenvolvimento local (sem Docker)

Pré-requisitos: Node.js 22 e Angular CLI.

### Backend

```bash
cd api
npm install
cp .env.example .env      # DATABASE_URL="file:./dev.db"
npx prisma migrate dev
npm run start:dev
```

### Frontend

```bash
cd frontend
npm install
ng serve                  # proxy.conf.json repassa /api para localhost:3000
```

A aplicação fica disponível em `http://localhost:4200`.

## Estrutura

```text
api/                       API NestJS
  Dockerfile               imagem blindada (non-root, alpine, multi-stage)
  prisma/schema.prisma     modelos do banco
  src/auth/                autenticação e JWT
  src/livro/               acervo
  src/autor/               autores
  src/cliente/             clientes
  src/emprestismo/         empréstimos e devoluções
  src/email/               envio de e-mail
  src/database/            acesso ao Prisma
frontend/                  aplicação Angular
  Dockerfile               build + nginx-unprivileged
  nginx.conf               SPA + proxy /api
docker-compose.yml         orquestração com controles defensivos
scripts/                   roteiro de validação do hardening
evidencias/                logs gerados pelo roteiro
```

## Testes

```bash
cd api
npm test          # unitários
npm run test:e2e  # ponta a ponta
```
