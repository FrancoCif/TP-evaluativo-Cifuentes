import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {


cards=[
  {
    nombre:'Zapatillas1',
    url:'../assets/Img/NIke JOurney.webp',
    descripcion:'una zapatilla',
  },
  {
    nombre:'Zapatillas2',
    url:'../assets/Img/NIke JOurney.webp',
    descripcion:'dos zapatilla',
  },
  {
    nombre:'Zapatillas3',
    url:'../assets/Img/NIke JOurney.webp',
    descripcion:'tres zapatilla',
  },
  {
    nombre:'Zapatillas3',
    url:'../assets/Img/NIke JOurney.webp',
    descripcion:'tres zapatilla',
  }
]


}
