import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConnexionService } from '../services/connexionService/connexion.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  
  private connexionForm: FormGroup;

  loading = false;
  submitted = false;
  loginErrorMessage = "";
  passwordErrorMessage = "";
  errorMessage = "";
  connexionResult: Number;
  identifiantMessage: string;
  inscriptionMessage: string;
  mdpMessage: string;
  connexionMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private connexionService: ConnexionService, translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('fr');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('fr');

    translate.get('CONNEXION').subscribe((res: string) => {this.connexionMessage = res;});
    translate.get('INSCRIPTION').subscribe((res: string) => {this.inscriptionMessage = res;});
    translate.get('IDENTIFIANT').subscribe((res: string) => {this.identifiantMessage = res;});
    translate.get('MDP').subscribe((res: string) => {this.mdpMessage = res;});

    this.connexionForm = this.formBuilder.group({
      login: ['login', Validators.required],
      password: ['password', Validators.required]
    });
  }

  ngOnInit() {
    if(localStorage.getItem("connexionToken")){
      this.router.navigateByUrl('/accueil');
    }
  }

  onSubmit(connexionInfo) {
    console.log("SUBMIT");
    
      if(this.checkInfos(connexionInfo)){
        switch(this.connexionResult){
          case 200:
            this.router.navigateByUrl('/accueil');
            break;
          case 403:
            this.errorMessage = "Accès refusé";
            break;
          case 404:
            this.errorMessage = "Page non trouvée";
            break;
          case 500:
          case 503:
          case 504:
            this.errorMessage = "Erreur serveur";
            break;
        }
      }


  }

  checkInfos(connexionInfo){
    if(connexionInfo['login'].length < 1){
      this.loginErrorMessage = "Ton id est trop cours!";
    } else {
      this.loginErrorMessage = "";
    }

    if(connexionInfo['password'].length < 6){
      this.passwordErrorMessage = "Ton mdp est trop cours!";
    } else {
      this.passwordErrorMessage = "";
    }
    
    if(this.loginErrorMessage || this.passwordErrorMessage){      
      return false;
    } else {
      this.connexionResult = this.connexionService.login(connexionInfo)
    }

    return true;
  }

  btnClick() {
    this.router.navigateByUrl('/creerCompte');
  };
  

}
