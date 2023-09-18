import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'photoEditor';
  inputName = 'my attrribute name';
  isHighlight = true;
  myMultipleClasses = ['red', 'uppercase'];
  isRed = false;
  products = ['banana', 'orange', 'apple'];
  name = 'Hai';

  clickMe() {
    alert('Wellcome!');
  }

  showName() {
    alert(this.name)
  }

  switchBackgroundColor() {
    this.isRed = !this.isRed;
  }
  constructor() {}
}
