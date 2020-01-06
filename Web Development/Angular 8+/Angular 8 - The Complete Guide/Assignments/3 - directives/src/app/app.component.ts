import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white{
      color: white;
    }
  `]
})
export class AppComponent {
  display = false;
  clickCount = [];

  constructor (){

  }

  toggleParagraph (){
    this.display = !this.display;
    this.clickCount.push(this.clickCount.length + 1);
  }



}
