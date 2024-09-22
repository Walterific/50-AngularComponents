import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  number: number | null = null;
  result: string = '';

  checkEvenOdd(): void {
    if (this.number !== null) {
      if (this.number % 2 === 0) {
        this.result = 'The number is Even';
      } else {
        this.result = 'The number is Odd';
      }
    } else {
      this.result = 'Please enter a valid number';
    }
  }
}

