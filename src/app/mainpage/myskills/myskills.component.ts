import { Component } from '@angular/core';
import { SkillComponent } from "./skill/skill.component";
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-myskills',
  imports: [SkillComponent],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    header: '',
    description: '',
    cta: ''
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      if (lang === 'DE') {
        this.text = {
          header: 'Meine Kenntnisse',
          description: 'Ich habe meine Kenntnisse in der Frontend-Entwicklung stetig weiterentwickelt und konnte dadurch vielseitige Projekte umsetzen.',
          cta: 'Kontakt aufnehmen'
        };
      } else {
        this.text = {
          header: 'My skills',
          description: 'I have grown my frontend development skills that have allowed me to create different projects.',
          cta: 'Get in touch'
        };
      }
    });
  }
}