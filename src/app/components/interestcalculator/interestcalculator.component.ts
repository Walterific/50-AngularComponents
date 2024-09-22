import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number | null = null;
  rate: number | null = null;
  time: number | null = null;
  interest: number | null = null;

  calculateInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null) {
      this.interest = (this.principal * this.rate * this.time) / 100;
    } else {
      this.interest = null;
    }
  }
}

