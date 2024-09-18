import { Component } from '@angular/core';

@Component({
  selector: 'app-stringmanipulator',
  templateUrl: './stringmanipulator.component.html',
  styleUrl: './stringmanipulator.component.css'
})
export class StringmanipulatorComponent {
  inputString: string = '';
  reversedString: string = '';
  uppercaseString: string = '';

  manipulateString(): void {
    this.reversedString = this.reverse(this.inputString);
    this.uppercaseString = this.inputString.toUpperCase();
  }

  private reverse(str: string): string {
    return str.split('').reverse().join('');
  }
}
