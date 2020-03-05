import { Component, OnInit, Input } from '@angular/core';
import { ConnexionService } from 'src/app/connexion/services/connexionService';
import { HttpClient } from '@angular/common/http';
import { Film } from 'src/app/models/film.model';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nouveau-commentaire-film',
  templateUrl: './nouveau-commentaire-film.component.html',
  styleUrls: ['./nouveau-commentaire-film.component.css']
})
export class NouveauCommentaireFilmComponent implements OnInit {
  @Input() 
  private film: Film;

  textComentaire: FormControl
  constructor( private httpClient: HttpClient,private connexionService: ConnexionService) { 
    this.textComentaire = new FormControl("");
  }

  ngOnInit() {
  }

  Envoyer(text : String){
    let data = {
      "clientId" : ConnexionService.clientConnecte,
      "idFilm" : this.film.idFilm,
      "texte": text,
      "date": formatDate(new Date(), 'yyyy/MM/dd', 'en')
    }
    console.log(data);

     this.httpClient.get("http://localhost:8080/pipouBack2/enregistrerCommentaire?clientId="+ConnexionService.clientConnecte+"&idFilm="+this.film.idFilm+"&texte="+text+"&date="+formatDate(new Date(), 'yyyy/MM/dd', 'en'))
    .toPromise()
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error("error ", error);
      return error;
    });

  }

}
