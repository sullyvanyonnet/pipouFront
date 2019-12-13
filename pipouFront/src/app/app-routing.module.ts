import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "accueil",
    loadChildren: () => import("./accueil/accueil.module").then(a => a.AccueilModule)
  },
  {
    path: "bibliotheque",
    loadChildren: () => import("./bibliotheque/bibliotheque.module").then(b => b.BibliothequeModule)
  },
  {
    path: "connexion",
    loadChildren: () => import("./connexion/connexion.module").then(c => c.ConnexionModule)
  },
  {
    path: "creerCompte",
    loadChildren: () => import("./creer-compte/creer-compte.module").then(c => c.CreerCompteModule)
  },
  {
    path: "ficheProduit",
    loadChildren: () => import("./fiche-produit/fiche-produit.module").then(f => f.FicheProduitModule)
  },
  {
    path: "panier",
    loadChildren: () => import("./panier/panier.module").then(p => p.PanierModule)
  },
  {
    path: "passageCommande",
    loadChildren: () => import("./passage-commande/passage-commande.module").then(p => p.PassageCommandeModule)
  },
  { 
    path: '',   
    redirectTo: '/connexion', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
