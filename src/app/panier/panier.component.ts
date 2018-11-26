import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(response => console.log(response.idLivre));
  }

  ngOnInit() {
  }

}
