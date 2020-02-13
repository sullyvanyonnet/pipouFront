import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {

  private static clientId: Number;
  private static film: any;

  constructor() { 
    FicheProduitComponent.film = {};
  }

  ngOnInit() {
  }

  static setCard(card: any) {
    FicheProduitComponent.film = card;
  }

  static setClientId(id: Number){
    FicheProduitComponent.clientId = id;
    console.log(id);
  }

}
