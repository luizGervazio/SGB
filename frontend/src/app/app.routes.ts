import { Routes } from '@angular/router';
import { LivrosComponent } from './pages/livros/livros.component';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { AlterarComponent } from './pages/alterar/alterar.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'livros',
    component: LivrosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'emprestimos',
    component: EmprestimosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'autores',
    component: AutoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'catalogo',
    component: CatalogoComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recuperar',
    component: RecuperarComponent
  },
  {
    path: 'alterar',
    component: AlterarComponent
  },
];
