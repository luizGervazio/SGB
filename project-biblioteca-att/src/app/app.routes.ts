import { Routes } from '@angular/router';
import { LivrosComponent } from './pages/livros/livros.component';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'livros',
        component: LivrosComponent
    },
    {
        path: 'emprestimos',
        component: EmprestimosComponent
    },
    {
        path: 'clientes',
        component: ClientesComponent
    },
    {
        path: 'autores',
        component: AutoresComponent
    },
    {
        path: 'catalogo',
        component: CatalogoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'recuperar',
        component: RecuperarComponent
    },
];
