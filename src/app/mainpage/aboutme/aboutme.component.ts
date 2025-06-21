import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    header: '',
    intro: '',
    creative: '',
    logical: '',
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      if (lang === 'DE') {
        this.text = {
          header: 'Über mich',
          intro:
            'Ich bin eine Frontend-Entwicklerin mit Sitz in Dresden, aber gerne auch remote tätig. Wenn du frische Ideen brauchst und Wert auf einfache, effektive Lösungen legst, bist du bei mir genau richtig.',
          creative:
            'Kreativität zieht sich durch alles, was ich tue - sei es bei pixelgenauen Layouts, intuitiven Benutzerflüssen oder der Lösung visueller Herausforderungen. Ich liebe es, mutige Ideen in klare, durchdachte Interfaces zu verwandeln.',
          logical:
            'Gleichzeitig habe ich ein strukturiertes, analytisches Denken, mit dem ich komplexe Probleme schnell durchblicke. Ich schreibe gerne sauberen Code, finde effizient Bugs und achte auf jedes technische Detail - denn gutes Design braucht ein stabiles Fundament.',
        };
      } else {
        this.text = {
          header: 'About me',
          intro:
            'I am a frontend developer based in Dresden, open to remote work and always eager to bring fresh ideas to the table. I love crafting clean, efficient solutions that feel intuitive and effortless to use.',
          creative:
            'Creativity is at the core of everything I do—whether it is translating a brand into a pixel-perfect layout, designing intuitive user flows, or finding unexpected ways to solve visual challenges.',
          logical:
            'At the same time, I have a logical and structured mindset that helps me break down complex problems and spot patterns quickly. I enjoy writing maintainable code and making sure every detail is well aligned under the hood.',
        };
      }
    });
  }
}
