import { Component } from '@angular/core';
import { Projects } from '../../../shared/interfaces/projects';
import { LanguageService } from '../../../shared/services/language.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [NgClass],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent {
  projects: Array<Projects> = [
    {
      image: 'assets/images/join photo.png',
      name: 'Join',
      skills: 'Angular | Typescript | HTML | SCSS',
      description: {
        EN: 'Task manager inspired by the Kanban FileSystem. Create and organize tasks using drag and drop DeclareFunctionStmt, assign users and categories.',
        DE: 'Ein von Kanban inspirierter Aufgabenmanager. Kreiere und erschaffe Aufgaben, behalte stets den Überblick über den aktuellen Stand und sorge für perfekte Abstimmung im Team!'
      },
      urlLiveTest: 'LinktoJoin',
      urlGithub: 'LinktoGithub'
    },
    {
      image: 'assets/images/Sharkie photo.png',
      name:'El Pollo Loco',
      skills: 'JavaScript | HTML | CSS',
      description: {
        EN: 'A simple browser game programmed with Javascript. Based on object-oriented approach. Help Pepe defeat the crazy chickens!',
        DE: 'Ein simples Browsergame, basierend auf objektorientiertem JavaScript! Hilf Pepe dabei, die verrückten Hühner zu besiegen!'
      },
      urlLiveTest: 'https://irene-kober.developerakademie.net/08%20-%20El%20Pollo%20Loco/index.html',
      urlGithub: 'https://github.com/iri-ko/El-Pollo-Loco'
    },
    {
      image: 'assets/images/Pokédex photo.png',
      name: 'Pokédex',
      skills: 'Javascript | HTML | CSS | API',
      description: {
        EN: 'Based on the PokéAPI. A simple library that provides and catalogues pokémon information. Go catch`em all!',
        DE: 'Eine kleine Bibliothek basierend auf der PokéAPI. Entdecke Pokémon und Infos über sie. Komm und schnapp sie dir!'
      },
      urlLiveTest: 'https://irene-kober.developerakademie.net/07%20-%20Pokedex/index.html',
      urlGithub: 'https://github.com/iri-ko/Pokedex'
    },
  ];

  currentLang: 'EN' | 'DE' = 'EN';

constructor(private languageService: LanguageService) {
  this.languageService.currentLang.subscribe((lang) => {
    this.currentLang = lang;
  });
}
}
