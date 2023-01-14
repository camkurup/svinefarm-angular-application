import { Component } from '@angular/core';
import { DashLight } from '../Interfaces/dash-light';
import { DashTemperature } from '../Interfaces/dash-temp';
import { DASHLIGHTS } from '../Mocks/mock-dash-light';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashLights = DASHLIGHTS;

  daschTemp: DashTemperature = {
    Temperature: 26,
    UVLightOn: true
  }
}
