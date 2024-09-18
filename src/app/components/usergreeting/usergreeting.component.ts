import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  name: string = '';
  greeting: string = '';

  generateGreeting(): void {
    if (this.name.trim()) {
      this.greeting = `Hello, ${this.name}! <br> Welcome to our website about Angular Components.`;
    } else {
      this.greeting = 'Please enter your name.';
    }
  }
}
