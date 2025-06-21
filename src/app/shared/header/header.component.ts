import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navText = {
    about: '',
    skills: '',
    portfolio: '',
  };

  currentLang: 'EN' | 'DE' = 'EN';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      switch (lang) {
        case 'DE':
          this.navText = {
            about: 'Über mich',
            skills: 'Kenntnisse',
            portfolio: 'Portfolio',
          };
          break;
        case 'EN':
        default:
          this.navText = {
            about: 'About me',
            skills: 'Skills',
            portfolio: 'Portfolio',
          };
      }
    });
  }

  switchLang(lang: 'EN' | 'DE') {
    this.languageService.setLang(lang);
  }
}
