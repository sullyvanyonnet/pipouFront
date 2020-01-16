import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InscriptionService } from './services/inscription.service';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit {
  
  private connexionForm: FormGroup;

  loading = false;
  submitted = false;
  nomErrorMessage = "";
  prenomErrorMessage = "";
  loginErrorMessage = "";
  passwordErrorMessage = "";
  errorMessage = "";
  inscriptionResult: Number;

  constructor(private formBuilder: FormBuilder, private router: Router, private inscriptionService: InscriptionService) {
    this.connexionForm = this.formBuilder.group({
      nom: ['coucou', Validators.required],
      prenom: ['coucou', Validators.required],
      login: ['coucou', Validators.required],
      password: ['coucou', Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit(connexionInfo) {
      if(this.checkInfos(connexionInfo)){
        switch(this.inscriptionResult){
          case 200:
            this.router.navigateByUrl('/connexion');
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

  async checkInfos(connexionInfo){

    if(connexionInfo['nom'].length <= 1){
      this.nomErrorMessage = "Renseigne ton nom pour t'inscrire!";
    } else {
      this.nomErrorMessage = "";
    }

    if(connexionInfo['prenom'].length <= 1){
      this.prenomErrorMessage = "Renseigne ton prénom pour t'inscrire!";
    } else {
      this.prenomErrorMessage = "";
    }
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
    
    if(this.nomErrorMessage || this.prenomErrorMessage || this.loginErrorMessage || this.passwordErrorMessage){      
      return false;
    } else {
      const result = await this.inscriptionService.inscription(connexionInfo);
      console.log(result);
      return result;
      
    }

    return true;
  }

  btnClick() {
    this.router.navigateByUrl('/connexion');
  };

}
