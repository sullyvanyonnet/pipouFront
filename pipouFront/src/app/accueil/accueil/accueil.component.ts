import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

import { Film } from 'src/app/models/film.model';
import { FilmsService } from 'src/app/services/filmsService/films.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class AccueilComponent implements OnInit {

  innerWidth: number;
  nbCols: number;

  constructor(private router: Router, private httpClient: HttpClient, private filmsService: FilmsService) { }

  async ngOnInit() {
    this.innerWidth = window.innerWidth; 
    this.nbCols = (window.innerWidth <= 400) ? 1 : 6;
    
    var films = await this.httpClient.get("http://localhost:8080/pipouBack2/film/listerfilms.htm")
    .toPromise()
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error("error ", error);
      return undefined;
    });

    this.filmsService.setFilms(films);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  getNbColumns(){
    return Math.ceil(this.innerWidth / (500))
  }

  getRowHeight(){
    return Math.ceil(this.innerWidth / (500))
  }

  cardClick(film: Film){
    console.log(film);
    this.router.navigateByUrl('/ficheProduit', { state: film });
  }
}
