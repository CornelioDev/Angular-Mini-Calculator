import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculator';
  number1:number=0;
  number2:number=0;
  result:number=0;

  sum():void {
    this.result = this.number1+this.number2;
  }

  sub(): void {
    this.result = this.number1 - this.number2;
  }
}
