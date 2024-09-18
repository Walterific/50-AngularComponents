import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name: string = '';
  uppercasedName: string = '';

  displayUppercaseName(): void {
    this.uppercasedName = this.name.toUpperCase();
  }
}
