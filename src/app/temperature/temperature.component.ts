import { Component } from '@angular/core';
import { Temperature } from '../Interfaces/temperature';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

  //Static data
  //change this to API data
  temperature: Temperature = {
    id: 1,
    Temperature: 26,
    TimeOfLoog: new Date,
    UVLightOn: true
  }
}
