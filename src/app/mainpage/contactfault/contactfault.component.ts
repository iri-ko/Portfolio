import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-contactfault',
  imports: [],
  templateUrl: './contactfault.component.html',
  styleUrl: './contactfault.component.scss',
})
export class ContactfaultComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    scroll: '',
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      this.text = {
        scroll: lang === 'DE' ? 'Nach unten' : 'Scroll down',
      };
    });
  }
}
