import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ConnexionService } from './services/connexion.service';


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

  constructor(private formBuilder: FormBuilder, private router: Router, private connexionService: ConnexionService) {
    this.connexionForm = this.formBuilder.group({
      login: ['coucou', Validators.required],
      password: ['coucou', Validators.required]
    });
  }

  ngOnInit() {

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
    if(connexionInfo['login'].length < 6){
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
      this.connexionResult = this.connexionService.checkInfos(connexionInfo)
    }

    return true;
  }

  btnClick() {
    this.router.navigateByUrl('/creerCompte');
  };
  

}
