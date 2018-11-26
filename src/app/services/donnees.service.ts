import { Injectable } from '@angular/core';

@Injectable()
export class DonneesService {

  livres = [
    {titre: 'Devenir', prix: '24€50', image: 'Devenir.jpg', parution: '13/11/2018 ', editeur: 'Fayard', collection: 'Documents  ',
      resume: 'Michelle Obama s’est imposée, au cours d’un parcours exemplaire, comme l’une des figures ' +
      'les plus remarquables de notre époque. Devenir retrace le parcours intime d’une femme de caractère ' +
      'qui a toujours su aller au-delà de ce qu’on attendait d’elle – une histoire qui nous encourage à faire de même.'},
    {titre: 'Qu\'est-ce qu\'un chef ?', prix: '20€90', image: 'Chef.jpg', parution: '14/11/2018',
      editeur: 'Fayard', collection: 'Documents', resume: 'Qu’est-ce qu’un chef ? '},

    {titre: '21 Leçons pour le XXIème siècle ', prix: '23€', image: 'Lecons-21eme-siecle.jpg',
      parution: '26/09/2018', editeur: 'Albin Michel', collection: 'Grand Public',
      resume: 'Alors que Sapiens examinait le passé et Homo Deus explorait notre avenir, ce nouveau livre choc ' +
      'de Yuval Harari se penche sur les grandes questions contemporaines de l’humanité '},

    {titre: 'Astérix - : Le secret de la potion magique', prix: '9€95', image: 'Le-secret-de-la-potion-magique.jpg',
      parution: '05/12/2018', editeur: 'Albert Rene', collection: 'Asterix',
      resume: 'À la suite d’une chute lors de la cueillette du gui, ' +
      'le druide Panoramix décide qu’il est temps d’assurer l’avenir du village...'}
  ];

  constructor() { }

  getListLivres() {
    return this.livres;
  }
}
