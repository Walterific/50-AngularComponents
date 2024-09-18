import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelsestatement',
  templateUrl: './ifelsestatement.component.html',
  styleUrl: './ifelsestatement.component.css'
})
export class IfelsestatementComponent {
  number: number | null = null;
  message: string = '';

  checkNumber(): void {
    if (this.number !== null) {
      if (this.number > 0) {
        this.message = 'The number is positive';
      } else if (this.number < 0) {
        this.message = 'The number is negative';
      } else {
        this.message = 'The number is zero';
      }
    } else {
      this.message = 'Please enter a number';
    }
  }
}
