import { Component } from '@angular/core';
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
export class UnPtitNomComponent {
  content = "";
}
