import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
  currentDate: string = '';

  showDateTime(): void {
    const now = new Date();
    this.currentDate = now.toLocaleString();
  }
}
