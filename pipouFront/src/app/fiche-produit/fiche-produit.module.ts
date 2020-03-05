import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FicheProduitComponent } from './fiche-produit.component';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationPipesModule } from '../application-pipes-module/application-pipes-module.module';
import { MatCardModule, MatInputModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { CommentaireFilmComponent } from './commentaire-film/commentaire-film.component';
import { NouveauCommentaireFilmComponent } from './nouveau-commentaire-film/nouveau-commentaire-film.component';

// panier module
export const ficheProduitRouteList: Routes = [
  {
    path: "**",
    component: FicheProduitComponent
  }
];

@NgModule({
  declarations: [FicheProduitComponent, CommentaireFilmComponent, NouveauCommentaireFilmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ficheProduitRouteList),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    ApplicationPipesModule
  ],
  exports: [FicheProduitComponent]
})
export class FicheProduitModule { }
