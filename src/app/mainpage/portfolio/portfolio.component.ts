import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    description: ''
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      if (lang === 'DE') {
        this.text = {
          description: 'Hier findest du eine Auswahl meiner Projekte. Schaue gerne rein und entdecke meine Skills und Arbeitsweise!'
        };
      } else {
        this.text = {
          description: 'Explore a selection of my work here – interact with projects to see my skills in action.'
        };
      }
    });
  }
}
