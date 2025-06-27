import {
  Component,
  Renderer2,
  HostListener,
  AfterViewInit,
  OnDestroy,
  Inject,
  NgZone,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
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
  isScrolled = false;

  private observer!: IntersectionObserver;
  private sectionIds = ['aboutme', 'myskills', 'portfolio', 'contact'];

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      this.navText =
        lang === 'DE'
          ? {
              about: 'Über mich',
              skills: 'Kenntnisse',
              portfolio: 'Portfolio',
              contact: 'Kontakt',
            }
          : {
              about: 'About me',
              skills: 'Skills',
              portfolio: 'Portfolio',
              contact: 'Contact',
            };
    });
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
    this.ngZone.runOutsideAngular(() => {
      this.waitForSections(this.sectionIds);
    });
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-110px 0px 0px 0px',
      threshold: 0.3,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);
  }

  private waitForSections(ids: string[], attempt: number = 0): void {
    const maxAttempts = 20;
    const missing = ids.filter((id) => !this.document.getElementById(id));

    if (missing.length && attempt < maxAttempts) {
      setTimeout(() => this.waitForSections(ids, attempt + 1), 100);
    } else {
      ids.forEach((id) => {
        const section = this.document.getElementById(id);
        if (section) {
          this.observer.observe(section);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  switchLang(lang: 'EN' | 'DE'): void {
    this.languageService.setLang(lang);
  }

  setActive(sectionId: string): void {
    this.activeSection = sectionId;
  }

  openMenu(): void {
    this.isBurgerOpen = true;
    this.isClosing = false;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  closeMenu(): void {
    this.isClosing = false;
    this.isBurgerOpen = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }
}
