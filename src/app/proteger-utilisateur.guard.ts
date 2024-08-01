import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {UtilisateursService} from "./services/utilisateurs.service";

export const protegerUtilisateurGuard: CanActivateFn = (route, state) => {
  /*
   * Création d'une guard qui interdit l'accès si la liste des utilisateurs est vide.
   */
  const service = inject(UtilisateursService);

  return service.utilisateurs.length > 0;
};
