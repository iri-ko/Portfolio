import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  switchLang(lang: 'EN' | 'DE') {
  this.languageService.setLang(lang);
}

}
