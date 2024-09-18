import { Component } from '@angular/core';

@Component({
  selector: 'app-switchcasestatement',
  templateUrl: './switchcasestatement.component.html',
  styleUrl: './switchcasestatement.component.css'
})
export class SwitchcasestatementComponent {
  dayNumber: number | null = null;
  dayName: string = '';

  findDay(): void {
    if (this.dayNumber !== null) {
      switch (this.dayNumber) {
        case 1:
          this.dayName = 'Sunday';
          break;
        case 2:
          this.dayName = 'Monday';
          break;
        case 3:
          this.dayName = 'Tuesday';
          break;
        case 4:
          this.dayName = 'Wednesday';
          break;
        case 5:
          this.dayName = 'Thursday';
          break;
        case 6:
          this.dayName = 'Friday';
          break;
        case 7:
          this.dayName = 'Saturday';
          break;
        default:
          this.dayName = 'Invalid day number. Please enter a number between 1 and 7.';
      }
    }
  }
}
