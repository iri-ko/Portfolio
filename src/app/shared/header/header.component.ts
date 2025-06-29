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
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

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
  private sectionIds = ['hero', 'aboutme', 'myskills', 'portfolio', 'contact'];

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2,
    private ngZone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
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

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          setTimeout(() => this.scrollToSection(fragment), 100);
        }
      }
    });
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
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

  scrollToSection(id: string): void {
    const element = this.document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setActive(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment: sectionId });
    } else {
      this.scrollToSection(sectionId);
    }
    this.activeSection = sectionId;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  switchLang(lang: 'EN' | 'DE'): void {
    this.languageService.setLang(lang);
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

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
