import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Film } from '../models/film.model';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/services/connexion.service';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  private film: Film;

  constructor(private router: Router, private httpClient: HttpClient) { 
  }

  ngOnInit() {
    this.film = window.history.state;
    if(!this.film.idFilm){
      this.film = JSON.parse(localStorage.getItem("film"));
    } else {
      localStorage.setItem("film", JSON.stringify(this.film));
    }
    console.log(this.film);
    
  }

  setFilm(film: Film){
    this.film = film;
    console.log(this.film);
    
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

}
