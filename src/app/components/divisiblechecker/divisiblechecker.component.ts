import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrl: './divisiblechecker.component.css'
})
export class DivisiblecheckerComponent {
  number1: number | null = null;
  number2: number | null = null;
  result: string = '';

  checkDivisibility(): void {
    if (this.number1 !== null && this.number2 !== null) {
      if (this.number2 === 0) {
        this.result = 'Cannot divide by zero';
      } else if (this.number1 % this.number2 === 0) {
        this.result = `${this.number1} is divisible by ${this.number2}`;
      } else {
        this.result = `${this.number1} is not divisible by ${this.number2}`;
      }
    } else {
      this.result = 'Please enter both numbers';
    }
  }
}
