import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { Routes, RouterModule } from '@angular/router';

// panier module
export const bibliothequeRouteList: Routes = [
  {
    path: "**",
    component: BibliothequeComponent
  }
];

@NgModule({
  declarations: [BibliothequeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bibliothequeRouteList)
  ],
  exports: [BibliothequeComponent]
})
export class BibliothequeModule { }
