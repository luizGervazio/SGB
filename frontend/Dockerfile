# syntax=docker/dockerfile:1

# ---------- Etapa 1: build do Angular ----------
FROM node:22-alpine AS build

WORKDIR /build

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npx ng build --configuration production

# ---------- Etapa 2: Nginx sem root ----------
# Variante oficial "unprivileged": roda como usuário nginx (UID 101)
# e escuta na porta 8080, sem precisar de privilégio para portas < 1024.
FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/dist/project-biblioteca-att/browser /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=15s --timeout=5s --start-period=10s --retries=3 \
    CMD ["wget", "-q", "-O", "/dev/null", "http://127.0.0.1:8080/"]
