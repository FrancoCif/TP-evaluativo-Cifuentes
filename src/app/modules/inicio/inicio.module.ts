import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CarrousellComponent } from './components/carrousell/carrousell.component';




@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CarrousellComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    InicioComponent,
    MatCardModule,
    CardsComponent,
    MatButtonModule,
    MatIconModule,
    CarrousellComponent

  ]
})
export class InicioModule { }
