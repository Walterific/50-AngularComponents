import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number | null = null;
  factorial: number | null = null;

  calculateFactorial(): void {
    if (this.number !== null && this.number >= 0) {
      this.factorial = this.computeFactorial(this.number);
    } else {
      this.factorial = null;
    }
  }

  private computeFactorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.computeFactorial(n - 1);
    }
  }
}
