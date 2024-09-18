import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  // Addition Operation
  sum(): void {
    this.result = this.number1 + this.number2;
  }

  // Subtraction Operation
  subtract(): void {
    this.result = this.number1 - this.number2;
  }

  // Multiplication Operation
  multiply(): void {
    this.result = this.number1 * this.number2;
  }

  // Division Operation
  divide(): void {
    this.result = this.number1 / this.number2;
  }
}
