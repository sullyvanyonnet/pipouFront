import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FilmCardComponent} from '../film-card/film-card.component'
import { Router } from '@angular/router';
import { FicheProduitComponent } from 'src/app/fiche-produit/fiche-produit.component';
import { ConnexionService } from 'src/app/connexion/services/connexion.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  cardList: FilmCardComponent[] = [];
  innerWidth: number;

  constructor(private router: Router) { 
    this.innerWidth = window.innerWidth;
    for (var _i = 0; _i < 5; _i++) {
      this.cardList.push(new FilmCardComponent(router));
    }    
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

  cardClick(){
    FicheProduitComponent.setClientId(ConnexionService.clientConnecte);
    this.router.navigateByUrl('/ficheProduit');
  }
}
