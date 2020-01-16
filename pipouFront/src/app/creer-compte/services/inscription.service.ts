import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from 'src/app/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private httpClient: HttpClient) { }

  
  inscription(connexionInfo) {
    const client = new Client();

    client.login = connexionInfo['login'];
    client.password = connexionInfo['password'];
    client.nom = connexionInfo['nom'];
    client.prenom = connexionInfo['prenom'];

    console.log(client);
    
    return this.httpClient
      .post("http://localhost:8080/pipou//client/enregistrer.htm", client)
      .toPromise()
      .then(result => {
        console.log(result);
        return 200;
      })
      .catch(error => {
        console.error("error ", error);
        return undefined;
      });
  }
}
