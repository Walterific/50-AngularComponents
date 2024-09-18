import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  dollarAmount: number | null = null;
  phpAmount: number | null = null;
  conversionRate: number = 56;

  convertToPhp(): void {
    if (this.dollarAmount !== null) {
      this.phpAmount = this.dollarAmount * this.conversionRate;
    } else {
      this.phpAmount = null;
    }
  }
}
