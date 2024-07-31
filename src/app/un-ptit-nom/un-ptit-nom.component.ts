import {Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-un-ptit-nom',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './un-ptit-nom.component.html',
  styleUrl: './un-ptit-nom.component.css'
})
export class UnPtitNomComponent implements OnInit, OnDestroy, DoCheck {
  content = "";

  constructor() {
    console.log("1. Instanciation du composant");
  }

  /*
   * S'exécute après le constructor une fois que tous le composant est chargé.
   * C'est donc plus safe pour accéder à d'autres composants (ou autres...)
   */
  ngOnInit() {
    console.log("2. Initialisation du composant");

  }

  ngDoCheck() {
    console.log("Il se passe quelque chose : " + this.content);
  }

  ngOnDestroy() {
    console.log("3. Destruction du composant");
  }
}






