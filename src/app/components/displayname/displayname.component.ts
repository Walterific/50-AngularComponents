import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {

  name: string = '';
  result: string = '';

  show() : void {
    this.result = this.name;
  }
}
