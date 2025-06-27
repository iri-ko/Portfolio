import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';

@Component({
  standalone: true,
  selector: 'app-imprint',
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

export class ImprintComponent {
  //#region variables
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    imprint: '',
    law: '',
    contact: '',
    phone: '',
  };
  //#endregion

  constructor(private languageService: LanguageService) {

    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;
      if (lang === 'DE') {
        this.text = {
          imprint: 'Impressum',
          law: 'Angaben gemäß § 5 DDG',
          contact: 'Kontakt',
          phone: 'Telefon',
        };
      } else {
        this.text = {
          imprint: 'Imprint',
          law: 'Informatin according to § 5 DDG',
          contact: 'Contact',
          phone: 'Phone',
        };
      }
    });
  }
}
