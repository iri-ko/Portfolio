import { Component } from '@angular/core';
import { SkillComponent } from "./skill/skill.component";

@Component({
  selector: 'app-myskills',
  imports: [SkillComponent],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {

}
