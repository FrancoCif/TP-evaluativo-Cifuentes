import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/components/inicio/inicio.component';
const routes: Routes = [

  //ruta predeterminada de inicio
  {
    path:"", component: InicioComponent
  },
  {
   path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },

  {
    path: "",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
