import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier/panier.component';
import { Routes, RouterModule } from '@angular/router';

// panier module
export const panierRouteList: Routes = [
  {
    path: "**",
    component: PanierComponent
  }
];

@NgModule({
  declarations: [PanierComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(panierRouteList)
  ],
  exports: [PanierComponent]
})
export class PanierModule { }
