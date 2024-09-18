import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
  inputString: string = '';
  characterCount: number = 0;

  countCharacters(): void {
    this.characterCount = this.inputString.length;
  }
}
