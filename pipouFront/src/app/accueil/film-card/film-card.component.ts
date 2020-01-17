import { Component, OnInit, Input } from '@angular/core';
import { FicheProduitComponent } from 'src/app/fiche-produit/fiche-produit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  id: Number = 0;
  title: string = "";
  note: Number = 0.0;


  constructor(private router: Router) { 
    this.id = 1; 
    this.title = "Titre de film pour enfant";
    this.note = 4.3;
  }

  ngOnInit() {
  }

}
