import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  static clientConnecte: Number;

  constructor(private router: Router, private httpClient: HttpClient) {}

  login(connexionInfo): Number{
    console.log(connexionInfo);
    return 200;
    /*
    const client = new Client();

    client.login = connexionInfo['login'];
    client.password = connexionInfo['password'];
    
    this.httpClient.post("http://localhost:8080/pipouBack2/connection.htm", client)
    .toPromise()
    .then(result => {
      console.log(result);
      
      ConnexionService.clientConnecte = <Number>result;
      //ConnexionService.clientConnecte = result['clientId'];
      localStorage.setItem("connexionToken", <string>result);
      this.router.navigateByUrl('/accueil');
      return 200;
    })
    .catch(error => {
      console.error("error ", error);
      return undefined;
    });
    
    return undefined; */
  }

  logout() {
    ConnexionService.clientConnecte = undefined;
    localStorage.removeItem("connexionToken");
    this.router.navigateByUrl('/connexion');
  }

  checkConnexion(){
    if(localStorage.getItem("connexionToken")){
      return true;
    } else {
      return false;
    }
  }
}
