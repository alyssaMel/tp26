import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../services/donnees.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.scss']
})
export class LivresComponent implements OnInit {

  // Créer ma variale pour pouvoir l'utiliser dans mon html
  livre: String = '';
  listeLivres = [];

  constructor(private livresServices: DonneesService) { }

  // Pour initialiser les variables nécessaires au lancement du composant
  // après sa création
  ngOnInit() {
    this.listeLivres = this.livresServices.getListLivres();
    console.log(this.listeLivres);
  }

  ajouterLivres(livre) {
    this.listeLivres.push(livre);
    console.log('liste des livres ajoutés: ', this.listeLivres);
    this.livre = '';
  }

}
