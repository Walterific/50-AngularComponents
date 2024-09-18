import { Component } from '@angular/core';

@Component({
  selector: 'app-forofloop',
  templateUrl: './forofloop.component.html',
  styleUrl: './forofloop.component.css'
})
export class ForofloopComponent {
  numbers: number[] = [1, 2, 3, 4, 5];
  elements: number[] = [];

  extractElements(): void {
    this.elements = [];
    for (const number of this.numbers) {
      this.elements.push(number);
    }
  }
}
