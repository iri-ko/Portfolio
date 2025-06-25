import { Component, Renderer2 } from '@angular/core';
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
    contact: '',
  };

  activeSection: string = '';
  currentLang: 'EN' | 'DE' = 'EN';

  isBurgerOpen = false;
  isClosing = false;

  constructor(private languageService: LanguageService, private renderer: Renderer2) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      switch (lang) {
        case 'DE':
          this.navText = {
            about: 'Über mich',
            skills: 'Kenntnisse',
            portfolio: 'Portfolio',
            contact: 'Kontakt'
          };
          break;
        case 'EN':
        default:
          this.navText = {
            about: 'About me',
            skills: 'Skills',
            portfolio: 'Portfolio',
            contact: 'Contact'
          };
      }
    });
  }

  switchLang(lang: 'EN' | 'DE') {
    this.languageService.setLang(lang);
  }

  setActive(sectionId: string) {
    this.activeSection = sectionId;


  }

  openMenu() {
    this.isBurgerOpen = true;
    this.isClosing = false;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  closeMenu() {
    this.isClosing = true;

    this.isBurgerOpen = false;
    this.isClosing = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }


}

