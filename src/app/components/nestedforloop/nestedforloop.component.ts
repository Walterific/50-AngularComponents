import { Component } from '@angular/core';

@Component({
  selector: 'app-nestedforloop',
  templateUrl: './nestedforloop.component.html',
  styleUrl: './nestedforloop.component.css'
})
export class NestedforloopComponent {
  rows: number | null = null;
  columns: number | null = null;
  grid: string[][] = [];

  generateGrid(): void {
    this.grid = [];
    if (this.rows !== null && this.columns !== null && this.rows > 0 && this.columns > 0) {
      for (let i = 1; i <= this.rows; i++) {
        const row: string[] = [];
        for (let j = 1; j <= this.columns; j++) {
          row.push(`${i}-${j}`);
        }
        this.grid.push(row);
      }
    } else {
      this.grid = [['Please enter valid numbers for rows and columns.']];
    }
  }
}
