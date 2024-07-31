import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  /* @Input signifie que contact peut être renseigné par un composant parent */
  @Input()
  contact : string = "toto";
}
