import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexionService/connexion.service';
import { FilmsService } from 'src/app/services/filmsService/films.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recherche: FormControl;

  constructor(private connexionService: ConnexionService, private filmsService : FilmsService) { 
    this.recherche = new FormControl('');
  }

  ngOnInit() {

  }

  logout(){
   this.connexionService.logout();
  }

  clientConnecte(){
    return this.connexionService.checkConnexion();
  }

  rechercheFilms(){
    this.filmsService.tri(this.recherche.value);
  }
}
