import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  targetNumber: number = Math.floor(Math.random() * 100) + 1;
  guess: number | null = null;
  message: string = '';

  checkGuess(): void {
    if (this.guess !== null) {
      if (this.guess < this.targetNumber) {
        this.message = 'Too low!';
      } else if (this.guess > this.targetNumber) {
        this.message = 'Too high!';
      } else {
        this.message = 'Congratulations! You guessed it right.';
      }
    }
  }
}
