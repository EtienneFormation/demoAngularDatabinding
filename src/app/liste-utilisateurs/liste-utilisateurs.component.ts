import { Component } from '@angular/core';
import {UtilisateursService} from "../services/utilisateurs.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-liste-utilisateurs',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './liste-utilisateurs.component.html',
  styleUrl: './liste-utilisateurs.component.css'
})
export class ListeUtilisateursComponent {
  utilisateurs : string[] = [];

  constructor(private service : UtilisateursService) {
    this.utilisateurs = service.utilisateurs;
  }
}
