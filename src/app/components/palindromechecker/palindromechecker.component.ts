import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputWord: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome(): void {
    const normalizedWord = this.inputWord.toLowerCase().replace(/[^a-z0-9]/gi, '');
    this.isPalindrome = normalizedWord === normalizedWord.split('').reverse().join('');
  }
}

