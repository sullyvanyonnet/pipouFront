import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './connexion.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    RouterModule.forChild(connexionRouteList),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ConnexionComponent]
})
export class ConnexionModule { }
