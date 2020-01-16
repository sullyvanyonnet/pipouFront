import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatInputModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { FilmCardComponent } from './film-card/film-card.component';

// panier module
export const accueilRouteList: Routes = [
  {
    path: "**",
    component: AccueilComponent
  }
];

@NgModule({
  declarations: [AccueilComponent, FilmCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accueilRouteList),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [AccueilComponent]
})
export class AccueilModule { }
