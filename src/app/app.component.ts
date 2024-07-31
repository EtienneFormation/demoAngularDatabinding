import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {UnPtitNomComponent} from "./un-ptit-nom/un-ptit-nom.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {SaisieUtilisateurComponent} from "./saisie-utilisateur/saisie-utilisateur.component";
import {ListeUtilisateursComponent} from "./liste-utilisateurs/liste-utilisateurs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass, UnPtitNomComponent, ContactListComponent, NgIf, SaisieUtilisateurComponent, ListeUtilisateursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoangular';
  content = "";
  feutricolor = "Vert";

  constructor() {
    setTimeout(
      () => {
        this.title = 'coucou monde !';
      }
      , 10000
    );
  }

  changerTitre() {
    this.title = "It's time";
  }
}
