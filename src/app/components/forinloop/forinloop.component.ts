import { Component } from '@angular/core';

@Component({
  selector: 'app-forinloop',
  templateUrl: './forinloop.component.html',
  styleUrl: './forinloop.component.css'
})
export class ForinloopComponent {
  data: { [key: string]: any } = {
    'Name': 'Walter Mark',
    'Age': 22,
    'Occupation': 'Developer',
    'Country': 'PH'
  };
  properties: string[] = [];
  values: any[] = [];

  extractData(): void {
    this.properties = [];
    this.values = [];
    for (let key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        this.properties.push(key);
        this.values.push(this.data[key]);
      }
    }
  }
}
