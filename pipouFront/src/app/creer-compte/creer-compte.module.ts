import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreerCompteComponent } from './creer-compte.component';
import { Routes, RouterModule } from '@angular/router';

// panier module
export const creerCompteRouteList: Routes = [
  {
    path: "**",
    component: CreerCompteComponent
  }
];

@NgModule({
  declarations: [CreerCompteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(creerCompteRouteList)
  ],
  exports: [CreerCompteComponent]
})
export class CreerCompteModule { }
