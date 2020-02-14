import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatInputModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { FilmCardComponent } from './film-card/film-card.component';
import { DefaultImagePipe } from '../default-image.pipe';

// panier module
export const panierRouteList: Routes = [
  {
    path: "**",
    component: PanierComponent
  }
];

@NgModule({
  declarations: [PanierComponent, FilmCardComponent, DefaultImagePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(panierRouteList),
    MatCardModule,
    MatInputModule, 
    MatButtonModule, 
    MatGridListModule
  ],
  exports: [PanierComponent]
})
export class PanierModule { }
