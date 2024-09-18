import { Component } from '@angular/core';

@Component({
  selector: 'app-whileloop',
  templateUrl: './whileloop.component.html',
  styleUrl: './whileloop.component.css'
})
export class WhileloopComponent {
  inputNumber: number | null = null;
  result: string = '';

  generateNumbers(): void {
    if (this.inputNumber !== null && this.inputNumber > 0) {
      let i = 1;
      this.result = '';
      while (i <= this.inputNumber) {
        this.result += i + ' ';
        i++;
      }
    } else {
      this.result = 'Please enter a valid number greater than 0.';
    }
  }
}
