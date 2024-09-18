import { Component } from '@angular/core';

@Component({
  selector: 'app-dowhileloop',
  templateUrl: './dowhileloop.component.html',
  styleUrl: './dowhileloop.component.css'
})
export class DowhileloopComponent {
  inputNumber: number | null = null;
  result: string = '';

  generateNumbers(): void {
    if (this.inputNumber !== null && this.inputNumber > 0) {
      let i = 1;
      this.result = '';
      do {
        this.result += i + ' ';
        i++;
      } while (i <= this.inputNumber);
    } else {
      this.result = 'Please enter a valid number greater than 0.';
    }
  }
}
