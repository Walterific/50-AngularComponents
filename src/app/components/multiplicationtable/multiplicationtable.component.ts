import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number | null = null;
  table: number[] = [];

  generateTable(): void {
    if (this.number !== null) {
      this.table = [];
      for (let i = 1; i <= 10; i++) {
        this.table.push(this.number * i);
      }
    }
  }
}
