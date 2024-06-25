import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    IniciarSesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
  ],
  exports:[
    IniciarSesionComponent,
    RegistroComponent
  ]
})
export class AutentificacionModule { }
