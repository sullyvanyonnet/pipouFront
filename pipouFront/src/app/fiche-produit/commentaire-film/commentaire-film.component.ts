import { Component, OnInit, Input } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire.model';

@Component({
  selector: 'app-commentaire-film',
  templateUrl: './commentaire-film.component.html',
  styleUrls: ['./commentaire-film.component.css']
})
export class CommentaireFilmComponent implements OnInit {
  @Input() 
  commentaire: Commentaire;

  constructor() { }

  ngOnInit() {
  }

}
