import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


//Material Components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';






@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
    

  ]

})
export class SharedModule { }
