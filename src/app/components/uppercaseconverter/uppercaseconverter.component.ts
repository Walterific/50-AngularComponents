import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {
  inputText: string = '';
  uppercaseText: string = '';

  convertToUppercase(): void {
    this.uppercaseText = this.inputText.toUpperCase();
  }
}
