import { Component } from '@angular/core';
import { DASHLIGHTS } from '../Mocks/mock-dash-light';
import { DASHTEMPERATURES } from '../Mocks/mock-dash-temperature';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashLights = DASHLIGHTS;
  dashTemperatures = DASHTEMPERATURES;
}
