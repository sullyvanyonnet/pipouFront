import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/connexion/services/connexion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private connexionService: ConnexionService) { }

  ngOnInit() {

  }

  logout(){
   this.connexionService.logout();
  }

  clientConnecte(){
    return ConnexionService.clientConnecte;
  }

}
