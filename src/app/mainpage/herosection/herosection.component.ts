import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.scss']
})
export class HerosectionComponent {

  //#region variables
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    iam: '',
    title: '',
    cta: ''
  };

  //#endregion

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      switch (lang) {
        case 'DE':
          this.text = {
            iam: 'Ich bin',
            title: 'FRONTEND ENTWICKLERIN',
            cta: 'Kontaktiere mich!'
          };
          break;
        case 'EN':
        default:
          this.text = {
            iam: 'I am',
            title: 'FRONTEND DEVELOPER',
            cta: "Let's talk!"
          };
      }
    });
  }
}
