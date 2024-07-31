import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {ContactDetailComponent} from "../contact-detail/contact-detail.component";

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    NgForOf,
    ContactDetailComponent
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts : string[] = [
    "Titi",
    "Toto",
    "Tata",
    "Tutu"
  ];


}
