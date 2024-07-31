import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  utilisateurs : string[] = [];

  constructor() { }

  ajouterUtilisateur(utilisateur : string) {
    this.utilisateurs.push(utilisateur);
  }
}
