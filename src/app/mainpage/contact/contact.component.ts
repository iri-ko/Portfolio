import { Component } from '@angular/core';
import { ContactformComponent } from "./contactform/contactform.component";
import { LanguageService } from '../../shared/services/language.service';


@Component({
  selector: 'app-contact',
  imports: [ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  //#region variables
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    header: '',
    title: '',
    description1: '',
    description2: '',
    cta: ''
  };

  //#endregion

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      if (lang === 'DE') {
        this.text = {
          header: 'Kontakt',
          title: 'Hast du ein Problem, das gelöst werden muss?',
          description1: 'Schreib mir einfach! Ich freue mich auf deine Ideen und eine tolle Zusammenarbeit!',
          description2: 'Du brauchst eine Frontend-Entwicklerin?',
          cta: 'Kontaktiere mich!'
        };
      } else {
        this.text = {
          header: 'Contact',
          title: 'Got a problem to solve?',
          description1: "Contact me through this form. I'm interested in hearing from you, getting to know your ideas, and contributing to your projects!",
          description2: 'Need a Frontend developer?',
          cta: 'Contact me!'
        };
      }
    });
  }
}