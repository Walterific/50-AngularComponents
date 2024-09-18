import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = '';
  message: string = '';

  validateUsername(): void {
    const usernameRegex = /^[a-zA-Z0-9]+$/;

    if (this.username.length < 6) {
      this.message = 'Username must be at least 6 characters long.';
    } else if (!usernameRegex.test(this.username)) {
      this.message = 'Username can only contain letters and numbers (no spaces or special characters).';
    } else {
      this.message = 'Username is valid!';
    }
  }
}
