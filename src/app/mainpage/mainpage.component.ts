import { Component } from '@angular/core';
import { HerosectionComponent } from "./herosection/herosection.component";
import { ContactfaultComponent } from "./contactfault/contactfault.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { MyskillsComponent } from "./myskills/myskills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-mainpage',
  imports: [HerosectionComponent, ContactfaultComponent, AboutmeComponent, MyskillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})

export class MainpageComponent {
  activeSection: string = '';
  setActive(sectionId: string) {
    this.activeSection = sectionId;
  }
}
