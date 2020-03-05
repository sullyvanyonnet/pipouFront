import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatInputModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { FilmCardComponent } from './film-card/film-card.component';
import { ApplicationPipesModule } from '../application-pipes-module/application-pipes-module.module';

// panier module
export const panierRouteList: Routes = [
  {
    path: "**",
    component: PanierComponent
  }
];

@NgModule({
  declarations: [PanierComponent, FilmCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(panierRouteList),
    MatCardModule,
    MatInputModule, 
    MatButtonModule, 
    MatGridListModule,
    ApplicationPipesModule
  ],
  exports: [PanierComponent]
})
export class PanierModule { }
