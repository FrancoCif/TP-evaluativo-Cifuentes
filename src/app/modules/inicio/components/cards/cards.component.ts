import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {


cards=[
  {
    nombre:'Zapatillas',
    url:'../assets/Img/zapatillas-puma-caven-2-0-mujer-crudo-89067380-640010394915005-1.jpg',
    descripcion:'una zapatilla',
  },
  {
    nombre:'Zapatillas',
    url:'../assets/Img/zapatillas-puma-caven-2-0-mujer-crudo-89067380-640010394915005-1.jpg',
    descripcion:'una zapatilla',
  },
  {
    nombre:'Zapatillas',
    url:'../assets/Img/zapatillas-puma-caven-2-0-mujer-crudo-89067380-640010394915005-1.jpg',
    descripcion:'una zapatilla',
  }
]


}
