import { Routes } from '@angular/router';
import { LivrosComponent } from './pages/livros/livros.component';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AutoresComponent } from './pages/autores/autores.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

export const routes: Routes = [
    { path: '', redirectTo: '/catalogo', pathMatch: 'full' }, // Redireciona para /livros por padrão
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
];
