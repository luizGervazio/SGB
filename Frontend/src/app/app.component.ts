import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FixedHeaderComponent } from './components/fixed-header/fixed-header.component';
import { MainTableComponent} from "./components/main-table/main-table.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, FixedHeaderComponent,MainTableComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SGBE';

  buscarLivro(value: string) {
    console.log('Busca:', value);
  }

  abrirModalLivro() {
    console.log('Abrir modal de livro');
  }
}
