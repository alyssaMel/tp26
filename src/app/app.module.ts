import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rajouter cette librairie pour pouvoir utiliser ngMOdel dans les html
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { PanierComponent } from './panier/panier.component';
import {DonneesService} from './services/donnees.service';

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ DonneesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
