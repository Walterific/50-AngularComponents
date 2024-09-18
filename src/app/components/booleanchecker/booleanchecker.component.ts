import { Component } from '@angular/core';

@Component({
  selector: 'app-booleanchecker',
  templateUrl: './booleanchecker.component.html',
  styleUrl: './booleanchecker.component.css'
})
export class BooleancheckerComponent {
  inputValue: string = '';
  result: string = '';

  checkBoolean(): void {
    const lowerCaseValue = this.inputValue.toLowerCase();
    const booleanValue = lowerCaseValue === 'true' ? true : lowerCaseValue === 'false' ? false : null;

    if (booleanValue === true) {
      this.result = 'The value is TRUE';
    } else if (booleanValue === false) {
      this.result = 'The value is FALSE';
    } else {
      this.result = 'No value provided';
    }
  }
}
