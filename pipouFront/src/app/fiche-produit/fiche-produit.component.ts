import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Film } from '../models/film.model';
import { Commentaire } from '../models/commentaire.model';

import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../services/connexionService/connexion.service';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  private film: Film;
  private commentaireList: Array<Commentaire>;

  constructor(private router: Router, private httpClient: HttpClient, private connexionService: ConnexionService) { 
  }

  ngOnInit() {
    this.film = window.history.state;
    if(!this.film.idFilm){
      this.film = JSON.parse(localStorage.getItem("film"));
    } else {
      localStorage.setItem("film", JSON.stringify(this.film));
    }
    console.log(this.film);
    this.rechercheCommentaire();
    
  }

  setFilm(film: Film){
    this.film = film;
    console.log(this.film);
    
  }

  async rechercheCommentaire(){  
    this.commentaireList = await this.httpClient.get("http://localhost:8080/pipouBack2/listerCommentaire?id="+ConnexionService.clientConnecte)
    .toPromise()
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error("error ", error);
      return null;
    });
  }
  

  addToPanier(){
    let data = {
      "clientId" : ConnexionService.clientConnecte,
      "idFilm" : this.film.idFilm
    }
    
    this.httpClient.post("http://localhost:8080/pipouBack2/enregistrerPanier.htm", data)
    .toPromise()
    .then(result => {
      console.log(result);
      this.router.navigateByUrl('/accueil');
      return 200;
    })
    .catch(error => {
      console.error("error ", error);
      return error;
    });
  }

  clientConnecte(){
    return this.connexionService.checkConnexion();
  }
}
