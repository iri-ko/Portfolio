import { Component } from '@angular/core';
import { HerosectionComponent } from "./herosection/herosection.component";
import { ContactfaultComponent } from "./contactfault/contactfault.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { MyskillsComponent } from "./myskills/myskills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-mainpage',
  imports: [HerosectionComponent, ContactfaultComponent, AboutmeComponent, MyskillsComponent, PortfolioComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})

export class MainpageComponent {

}
