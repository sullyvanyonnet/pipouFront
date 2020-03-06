import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexionService/connexion.service';
import { FilmsService } from 'src/app/services/filmsService/films.service';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recherche: FormControl;
  
  bibliothequeMenu : string;
  deconnexionMenu : string;

  constructor(private connexionService: ConnexionService, private filmsService : FilmsService, translate: TranslateService) { 
    translate.setDefaultLang('fr');
    translate.use('fr');

    translate.get('BIBLIOTHEQUE').subscribe((res: string) => {this.bibliothequeMenu = res;});
    translate.get('DECONNEXION').subscribe((res: string) => {this.deconnexionMenu = res;});
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
