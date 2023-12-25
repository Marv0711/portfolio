import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { GardientHeroComponent } from "../gardient-hero/gardient-hero.component";
import { AboutMeComponent } from "../about-me/about-me.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [HeaderComponent, GardientHeroComponent, AboutMeComponent]
})
export class LandingPageComponent {

}
