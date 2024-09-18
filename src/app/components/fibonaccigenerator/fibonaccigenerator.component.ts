import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  num: number | null = null;
  fibonacciSequence: number[] = [];

  generateFibonacci(): void {
    this.fibonacciSequence = [];
    if (this.num && this.num > 0) {
      let a = 0, b = 1;
      this.fibonacciSequence.push(a);
      if (this.num > 1) {
        this.fibonacciSequence.push(b);
      }
      for (let i = 2; i < this.num; i++) {
        const next = a + b;
        this.fibonacciSequence.push(next);
        a = b;
        b = next;
      }
    }
  }
}
