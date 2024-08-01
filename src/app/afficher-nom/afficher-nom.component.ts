import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-afficher-nom',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './afficher-nom.component.html',
  styleUrl: './afficher-nom.component.css'
})
export class AfficherNomComponent implements OnInit {
  name : string = "";

  constructor(private route : ActivatedRoute) {}

  ngOnInit() {
    // Risque que le paramètre ne se mette pas correctement à jour lors des accès successifs au composant
    // this.name = this.route.snapshot.paramMap.get("nom") || ""; // pas bien

    // Syntaxe réactive : je ne risque pas d'utiliser une ancienne valeur du paramètre
    this.route.paramMap.subscribe(params => {
      this.name = params.get("nom") || "";
    });
  }
}
