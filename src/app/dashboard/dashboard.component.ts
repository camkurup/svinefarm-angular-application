import { Component } from '@angular/core';
import { DashLight } from '../dash-light';
import { DashTemperature } from '../dash-temp';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashLight: DashLight = {
    LightLevelOutSide: 1,
    LightLevelInStable: 1
  }

  daschTemp: DashTemperature = {
    Temperature: 26,
    UVLightOn: true
  }
}
