import { Component } from '@angular/core';
import { Skills } from '../../../shared/interfaces/skills';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})

export class SkillComponent {
  skills: Array<Skills> = [
  {
    image: "assets/icons/Angular.png",
    name: "Angular"
  },
  {
    image: "assets/icons/API.png",
    name: "Rest-API"
  },
  {
    image: "assets/icons/CSS.png",
    name: "CSS"
  },
  {
    image: "assets/icons/Git.png",
    name: "Git"
  },
  {
    image: "assets/icons/HTML.png",
    name: "HTML"
  },
  {
    image: "assets/icons/Javascript.png",
    name: "Javascript"
  },
  {
    image: "assets/icons/Typescript.png",
    name: "Typescript"
  },
];

}
