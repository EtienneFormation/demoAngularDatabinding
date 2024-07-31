import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UtilisateursService} from "../services/utilisateurs.service";

@Component({
  selector: 'app-saisie-utilisateur',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './saisie-utilisateur.component.html',
  styleUrl: './saisie-utilisateur.component.css'
})
export class SaisieUtilisateurComponent {
  nouvel_utilisateur = "";

  constructor(private service : UtilisateursService) {
  }

  enregistrer() {
    this.service.ajouterUtilisateur(this.nouvel_utilisateur);
    this.nouvel_utilisateur = "";
  }
}
