import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent{
 showIconName = true;
 showIconEmail = true;
 showIconMessage = true;
 nameFirstClick = false;
 EmailFirstClick = false;
 MessageFirstClick = false;
 checkboxClicked = false;

 isButtonDisabled = true;

 buttonActiv(){
  let button = document.getElementById('sendMessageButton');
  this.isButtonDisabled=!this.isButtonDisabled

  if(!this.isButtonDisabled && !this.showIconName && !this.showIconEmail && !this.showIconMessage){
    button?.classList.remove('disable-design')
  }

  else if(this.isButtonDisabled || this.showIconName || this.showIconEmail || this.showIconMessage){
    button?.classList.add('disable-design')
  }

 }


 checkInput(inputfield:any, showIcon:string){
    let activInputfield = inputfield.target as HTMLInputElement;
    let isInputEmpty = activInputfield.value.length <= 0;

    switch (showIcon) {
      case 'showIconName':
        this.showIconName = isInputEmpty;
        this.nameFirstClick = true;
        break;
      case 'showIconEmail':
        if(activInputfield.value.includes('@')){
          this.showIconEmail = false;
          this.EmailFirstClick = true;
        }
        else{
          this.showIconEmail = true;
          this.EmailFirstClick = true;
        }
        break;
      case 'showIconMessage':
        this.showIconMessage = isInputEmpty;
        this.MessageFirstClick = true;
        break;
    }
    this.isButtonDisabled=!this.isButtonDisabled
    this.buttonActiv();
 }

 checkBoxCklick(){
  if(this.checkboxClicked){
    this.checkboxClicked = false;
  }
  else{
    this.checkboxClicked = true;
  }
 }
}
