import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  login(): void {
    if (this.email && this.password) {
      this.message = `Successfully logged in with this : ${this.email}`;
    } else {
      this.message = 'Please enter both email and password.';
    }
  }
}
