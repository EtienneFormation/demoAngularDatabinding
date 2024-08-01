import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UtilisateursService} from "../services/utilisateurs.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-saisie-utilisateur',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './saisie-utilisateur.component.html',
  styleUrl: './saisie-utilisateur.component.css'
})
export class SaisieUtilisateurComponent {
  nouvel_utilisateur = "";

  constructor(private service : UtilisateursService, private router : Router) {
  }

  enregistrer() {
    this.service.ajouterUtilisateur(this.nouvel_utilisateur);
    this.nouvel_utilisateur = "";
  }

  async naviguer() {
    await this.router.navigate(["/afficher-nom", this.nouvel_utilisateur]);
    console.log("Fin de la navigation");
  }
}
