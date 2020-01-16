import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FilmCardComponent} from '../film-card/film-card.component'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  cardList: FilmCardComponent[] = [];
  innerWidth: number;

  constructor() { 
    this.innerWidth = window.innerWidth;
    for (var _i = 0; _i < 5; _i++) {
      this.cardList.push(new FilmCardComponent());
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
}
