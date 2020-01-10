import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FicheProduitComponent } from './fiche-produit.component';
import { Routes, RouterModule } from '@angular/router';

// panier module
export const ficheProduitRouteList: Routes = [
  {
    path: "**",
    component: FicheProduitComponent
  }
];

@NgModule({
  declarations: [FicheProduitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ficheProduitRouteList)
  ],
  exports: [FicheProduitComponent]
})
export class FicheProduitModule { }
