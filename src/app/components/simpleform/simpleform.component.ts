import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  name: string = '';
  email: string = '';
  address: string = '';
  submittedData: any = {};

  submitForm(): void  {
    this.submittedData = {
      name: this.name,
      email: this.email,
      address: this.address
    };
    console.log(this.submittedData);
  }
}
