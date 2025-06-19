import { Component } from '@angular/core';
import { ContactformComponent } from "./contactform/contactform.component";

@Component({
  selector: 'app-contact',
  imports: [ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
