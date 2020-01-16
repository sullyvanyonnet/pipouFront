import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  id: Number = 0;
  title: string = "";
  note: Number = 0.0;


  constructor() { 
    this.id = 1; 
    this.title = "Titre de film pour enfant";
    this.note = 4.3;
  }

  ngOnInit() {
  }
}
