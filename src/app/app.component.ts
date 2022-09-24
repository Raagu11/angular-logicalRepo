import { Component, VERSION } from '@angular/core';
import { CountryInterface } from './countryinterface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  countryList: CountryInterface[] = [
    {
      id: 1,
      countryName: 'india',
      countryCode: '+91',
    },
    {
      id: 2,
      countryName: 'uk',
      countryCode: '+95',
    },
    {
      id: 3,
      countryName: 'austria',
      countryCode: '+99',
    },
    {
      id: 4,
      countryName: 'japan',
      countryCode: '+96',
    },
  ];
}
