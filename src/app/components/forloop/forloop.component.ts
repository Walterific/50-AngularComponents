import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {
  inputNumber: number | null = null;
  result: string = '';

  generateNumbers(): void {
    if (this.inputNumber !== null && this.inputNumber > 0) {
      this.result = '';
      for (let i = 1; i <= this.inputNumber; i++) {
        this.result += i + ' ';
      }
    } else {
      this.result = 'Please enter a valid number greater than 0.';
    }
  }
}
