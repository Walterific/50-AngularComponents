import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})
export class TextlengthComponent {
  inputText: string = '';
  textLength: number | null = null;

  calculateLength(): void {
    this.textLength = this.inputText.length;
  }
}

