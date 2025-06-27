import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    imprint: ''
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      this.text.imprint = lang === 'DE' ? 'Impressum' : 'Imprint';
    });
  }

  
}
