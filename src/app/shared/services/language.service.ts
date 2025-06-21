import { Injectable } from '@angular/core';
//allows services to be injectible into the project

import { BehaviorSubject } from 'rxjs';
//listens to user behavior (in this case which language) and changes language in real time

@Injectable({
  providedIn: 'root'
  //root -> makes it so that the language is "broadcasted" globablly -> no need to interject it into every component
})
export class LanguageService {
  private readonly storageKey = 'preferredLang'; //for localstorage

  private lang$ = new BehaviorSubject<'EN' | 'DE'>(
    //sets standard language to English, but listens to changes.
    (localStorage.getItem(this.storageKey) as 'EN' | 'DE') || 'EN'
  );

  get currentLang() {
    return this.lang$.asObservable();
    //makes sure no components can change language, only this service can.All components can listen and receive it.
  }

  setLang(lang: 'EN' | 'DE') {
    //language is actually set right here.
    localStorage.setItem(this.storageKey, lang);
    //remembering what language was chosen
    this.lang$.next(lang);
    //sets language.
  }
}
