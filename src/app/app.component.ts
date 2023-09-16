import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photoEditor';
  inputName = 'my attrribute name';
  isHighlight = true;
  myMultipleClasses = ['red', 'uppercase']

}
