import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;
  category: string = '';

  calculateBMI(): void {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);
      this.setBMICategory();
    } else {
      this.bmi = null;
      this.category = '';
    }
  }

  setBMICategory(): void {
    if (this.bmi) {
      if (this.bmi < 18.5) {
        this.category = 'Underweight';
      } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
        this.category = 'Normal weight';
      } else if (this.bmi >= 25 && this.bmi < 29.9) {
        this.category = 'Overweight';
      } else {
        this.category = 'Obese';
      }
    }
  }
}
