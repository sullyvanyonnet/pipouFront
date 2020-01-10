import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassageCommandeComponent } from './passage-commande.component';
import { Routes, RouterModule } from '@angular/router';

// panier module
export const passageCommandeRouteList: Routes = [
  {
    path: "**",
    component: PassageCommandeComponent
  }
];

@NgModule({
  declarations: [PassageCommandeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(passageCommandeRouteList)
  ],
  exports: [PassageCommandeComponent]
})
export class PassageCommandeModule { }
