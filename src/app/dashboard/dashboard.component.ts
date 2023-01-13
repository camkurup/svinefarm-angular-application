import { Component } from '@angular/core';
import { DashLight } from '../dash-light';
import { DashTemperature } from '../dash-temp';
import { DASHLIGHTS } from '../mock-dash-light';

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
