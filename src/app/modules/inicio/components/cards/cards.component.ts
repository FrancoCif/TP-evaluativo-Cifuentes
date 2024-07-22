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
    url:'../assets/Img/NIke JOurney.webp',
    descripcion:'una zapatilla',
  },
  {
    nombre:'Zapatillas',
    url:'../assets/Img/NIke JOurney.webp',
    descripcion:'una zapatilla',
  },
  {
    nombre:'Zapatillas',
    url:'../assets/Img/NIke JOurney.webp',
    descripcion:'una zapatilla',
  }
]


}
