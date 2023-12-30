import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { GardientHeroComponent } from "../gardient-hero/gardient-hero.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { MyProjectsComponent } from "../my-projects/my-projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [HeaderComponent, GardientHeroComponent, AboutMeComponent, MySkillsComponent, MyProjectsComponent, ContactComponent, FooterComponent]
})
export class LandingPageComponent {

}
