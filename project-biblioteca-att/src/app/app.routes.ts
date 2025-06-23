import { Routes } from '@angular/router';
import { LivrosComponent } from './pages/livros/livros.component';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { AutoresComponent } from './pages/autores/autores.component';

export const routes: Routes = [
    { path: '', redirectTo: '/livros', pathMatch: 'full' }, // Redireciona para /livros por padrão
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
    }
];
