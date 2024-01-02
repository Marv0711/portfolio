import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  activButton(button: MouseEvent){
    let oldButton = document.querySelectorAll('.activ-button');

    if(oldButton){
      oldButton.forEach((element) => {
        element.classList.remove('activ-button');
      });
    }

    let activButton = button.target as HTMLElement;
    activButton?.classList.add('activ-button')
  }
}
