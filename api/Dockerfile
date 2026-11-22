# syntax=docker/dockerfile:1

# =============================================================
# Etapa 1 - build: instala dependências, gera o Prisma Client
# e compila o NestJS. Nada desta etapa vai para a imagem final
# além dos artefatos copiados explicitamente.
# =============================================================
FROM node:22-alpine AS build

WORKDIR /build

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev \
    && npm cache clean --force

# =============================================================
# Etapa 2 - runtime: imagem enxuta, sem ferramentas de build,
# executando com usuário não-privilegiado.
# =============================================================
FROM node:22-alpine AS runtime

ENV NODE_ENV=production \
    PORT=3000 \
    DATABASE_URL="file:/app/data/app.db" \
    CHECKPOINT_DISABLE=1 \
    PRISMA_HIDE_UPDATE_MESSAGE=1

WORKDIR /app

# Grupo e usuário de sistema dedicados (GID/UID 10001), sem shell
# de login e sem diretório home. /app/data é o único diretório
# do qual o appuser é dono: é onde o volume do SQLite é montado.
RUN addgroup -S -g 10001 appgroup \
    && adduser -S -D -H -u 10001 -G appgroup -s /sbin/nologin appuser \
    && mkdir -p /app/data \
    && chown appuser:appgroup /app/data \
    && chmod 0700 /app/data

# Código e dependências pertencem ao root: o appuser só consegue ler.
COPY --from=build /build/package.json ./package.json
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/prisma ./prisma
COPY --from=build /build/dist ./dist

USER appuser

EXPOSE 3000

HEALTHCHECK --interval=15s --timeout=5s --start-period=20s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1

# Aplica as migrations no SQLite do volume e sobe a API.
# "exec" faz o Node virar o PID 1 e receber os sinais de parada.
CMD ["sh", "-c", "./node_modules/.bin/prisma migrate deploy && exec node dist/main.js"]
