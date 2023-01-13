import { Component } from '@angular/core';
import { Light } from '../light';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {
  light: Light = {
    id: 1,
    LightLevelOutside: 1,
    TimeOfLog: new Date(),
    LightLevelInStable: 1
  }
}
