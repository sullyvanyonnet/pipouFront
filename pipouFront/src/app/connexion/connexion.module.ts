import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion/connexion.component';
import { Routes, RouterModule } from '@angular/router';

// panier module
export const connexionRouteList: Routes = [
  {
    path: "**",
    component: ConnexionComponent
  }
];

@NgModule({
  declarations: [ConnexionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(connexionRouteList)
  ],
  exports: [ConnexionComponent]
})
export class ConnexionModule { }
