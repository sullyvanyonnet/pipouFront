import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";
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
  identifiantError = false;
  mdpError = false;
  idErrorMessage = "";
  mdpErrorMessage = "";
  errorMessage = "";
  connexionResult: Number;

  constructor(private formBuilder: FormBuilder, private router: Router, private connexionService: ConnexionService) {
    this.connexionForm = this.formBuilder.group({
      identifiant: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit(connexionInfo) {
      console.log(connexionInfo);
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
    if(connexionInfo['identifiant'].length < 6){
      this.identifiantError = true;
      this.idErrorMessage = "Ton id est trop cours!";
    } else {
      this.identifiantError = false;
      this.idErrorMessage = "";
    }

    if(connexionInfo['motDePasse'].length < 6){
      this.mdpError = true;
      this.mdpErrorMessage = "Ton mdp est trop cours!";
    } else {
      this.mdpError = false;
      this.mdpErrorMessage = "";
    }
    console.log(this.identifiantError);
    console.log(this.mdpError);
    
    if(this.identifiantError || this.mdpError){      
      return false;
    }

    if (!this.identifiantError && !this.mdpError){
      this.connexionResult = this.connexionService.checkInfos(connexionInfo)
    }

    return true;
  }

  btnClick() {
    this.router.navigateByUrl('/creerCompte');
  };
  

}
