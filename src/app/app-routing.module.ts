import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import {PanierComponent} from './panier/panier.component';

const routes: Routes = [
  { path: '', component: LivresComponent },
  { path: 'panier/:idLivre', component: PanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
