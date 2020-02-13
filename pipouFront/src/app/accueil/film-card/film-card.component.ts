import { Component, OnInit, Input } from '@angular/core';
import { FicheProduitComponent } from 'src/app/fiche-produit/fiche-produit.component';
import { Router } from '@angular/router';
import { Film } from 'src/app/vo/film.vo';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() film: Film;


  constructor(private router: Router) { 
    console.log(this.film);
    
  }

  ngOnInit() {

  }

}
