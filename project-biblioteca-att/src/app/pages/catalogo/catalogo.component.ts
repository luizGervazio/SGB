import { Component } from '@angular/core';
import { HeaderCatalogoComponent } from "../../components/header-catalogo/header-catalogo.component";
import { FooterCatalogoComponent } from "../../components/footer-catalogo/footer-catalogo.component"
import { MainCatalogoComponent } from "../../components/main-catalogo/main-catalogo.component";

@Component({
  selector: 'app-catalogo',
  imports: [HeaderCatalogoComponent, FooterCatalogoComponent, MainCatalogoComponent],
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent {
Livros = 5;

}
