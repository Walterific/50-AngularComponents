import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  num: number | null = null;
  oddSum: number | null = null;

  calculateOddSum(): void {
    this.oddSum = 0;
    if (this.num && this.num > 0) {
      for (let i = 1; i <= this.num; i += 2) {
        this.oddSum += i;
      }
    }
  }
}
