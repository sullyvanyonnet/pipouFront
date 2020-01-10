import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil.component';
import { Routes, RouterModule } from '@angular/router';

// panier module
export const accueilRouteList: Routes = [
  {
    path: "**",
    component: AccueilComponent
  }
];

@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accueilRouteList)
  ],
  exports: [AccueilComponent]
})
export class AccueilModule { }
