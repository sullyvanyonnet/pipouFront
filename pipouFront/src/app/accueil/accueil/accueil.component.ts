import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FicheProduitComponent } from 'src/app/fiche-produit/fiche-produit.component';
import { ConnexionService } from 'src/app/connexion/services/connexion.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/vo/film.vo';

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

  static filmList: Film[];
  innerWidth: number;

  constructor(private router: Router, private httpClient: HttpClient) { 
    this.innerWidth = window.innerWidth;

    let filmsMock = [
      {
        id:1,
        titre:'Weenie l\'ourson au pays merveilleux des junkies',
        image:'https://fr.web.img2.acsta.net/pictures/18/07/11/14/12/4134938.jpg',
        note:4
      },
      {
        id:2,
        titre:'Peepoodo',
        image:'https://peepoodo.bobbypills.com/images/icon.jpg',
        note:5
      },
      {
        id:3,
        titre:'La Pat Patrouille fait une descente en teuftek',
        image:'https://photos.tf1.fr/1200/0/vignette-portrait-paw-patrol-eeb718-2e6edd-0@1x.jpg',
        note:2
      }
    ];
    AccueilComponent.filmList = filmsMock;
    /* 
    this.httpClient.get("http://localhost:8080/pipouBack2/film/listerfilms.htm")
    .toPromise()
    .then(result => {
      console.log(result);
      AccueilComponent.filmList = result;
      return 200;
    })
    .catch(error => {
      console.error("error ", error);
      return undefined;
    });*/
  }

  ngOnInit() {

  }

  getCards(){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    
  }

  getNbColumns(){
    return Math.ceil(this.innerWidth / (500))
  }

  cardClick(card){
    FicheProduitComponent.setClientId(ConnexionService.clientConnecte);
    FicheProduitComponent.setCard(card);
    this.router.navigateByUrl('/ficheProduit');
  }
}
