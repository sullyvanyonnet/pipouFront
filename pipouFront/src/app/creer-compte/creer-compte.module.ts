import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreerCompteComponent } from './creer-compte.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    RouterModule.forChild(creerCompteRouteList),
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CreerCompteComponent]
})
export class CreerCompteModule { }
