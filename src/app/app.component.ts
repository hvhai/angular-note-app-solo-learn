import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  reactiveName = new FormControl('');

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  clickMe() {
    alert('Wellcome!');
  }

  login() {
    alert(
      this.loginForm.value.username + ' | ' + this.loginForm.value.password
    );
  }

  showName() {
    alert(this.name);
  }

  showReactiveName() {
    alert(this.reactiveName.value);
  }

  switchBackgroundColor() {
    this.isRed = !this.isRed;
  }

  constructor() {}
}
