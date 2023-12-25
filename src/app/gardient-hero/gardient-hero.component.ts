import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-gardient-hero',
    standalone: true,
    templateUrl: './gardient-hero.component.html',
    styleUrl: './gardient-hero.component.scss',
    imports: [HeaderComponent]
})
export class GardientHeroComponent {

}
