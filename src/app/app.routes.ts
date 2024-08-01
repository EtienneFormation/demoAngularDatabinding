import { Routes } from '@angular/router';
import {SaisieUtilisateurComponent} from "./saisie-utilisateur/saisie-utilisateur.component";
import {ListeUtilisateursComponent} from "./liste-utilisateurs/liste-utilisateurs.component";
import {AfficherNomComponent} from "./afficher-nom/afficher-nom.component";
import {protegerUtilisateurGuard} from "./proteger-utilisateur.guard";

export const routes: Routes = [
  {path : "saisie-utilisateur", component : SaisieUtilisateurComponent},
  {path : "lister-utilisateur", component : ListeUtilisateursComponent, canActivate : [protegerUtilisateurGuard]},
  {path : "afficher-nom/:nom", component : AfficherNomComponent},
  {path : "**", redirectTo : "/saisie-utilisateur"}
];
