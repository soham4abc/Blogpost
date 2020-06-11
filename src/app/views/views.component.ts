import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent {
  public addresses: any[] = [{
    id: 1,
    address: '',
    street: '',
    city: '',
    country: ''
  }];
  constructor() {

  }

  ngOnInit() {

  }

  addAddress() {
    this.addresses.push({
      id: this.addresses.length + 1,
      address: '',
      street: '',
      city: '',
      country: ''
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  logValue() {
    console.log(this.addresses);
  }
}