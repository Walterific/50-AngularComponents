import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
  amount: number | null = null;
  formattedAmount: string | null = null;
  selectedCurrency: string = 'USD';

  formatCurrency(): void {
    if (this.amount !== null) {
      let currencySymbol = '';

      switch (this.selectedCurrency) {
        case 'USD':
          currencySymbol = '$';
          break;
        case 'PHP':
          currencySymbol = '₱';
          break;
        case 'EUR':
          currencySymbol = '€';
          break;
        default:
          currencySymbol = '$';
      }

      this.formattedAmount = `${currencySymbol}${this.amount.toFixed(2)}`;
    }
  }
}
