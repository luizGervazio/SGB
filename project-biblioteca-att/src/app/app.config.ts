import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // ajuste conforme seu caminho

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // 🔐 ESSENCIAL para aplicar rotas e guards
  ]
};
