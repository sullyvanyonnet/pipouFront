import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConnexionService } from '../connexion/services/connexion.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  filmList: Array<Film>;
  constructor(private router: Router, private httpClient: HttpClient) { }

  async ngOnInit() {
    this.filmList = await this.httpClient.get("http://localhost:8080/pipouBack2/film/getPanier.htm?id=" + ConnexionService.clientConnecte)
    .toPromise()
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error("error ", error);
      return undefined;
    });
  }

  async passageCommande(){
    await this.httpClient.get("http://localhost:8080/pipouBack2/film/viderPanier.htm?id=" + ConnexionService.clientConnecte)
    .toPromise()
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error("error ", error);
      return undefined;
    });
  }
}
