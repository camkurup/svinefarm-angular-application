import { Component } from '@angular/core';
import { DASHTEMPERATURES } from '../Mocks/mock-dash-temperature';
import { LightService } from '../_services/light.service';
import { Light } from '../Interfaces/light';
import { Temperature } from '../Interfaces/temperature';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private lightService: LightService) { }
  ngOnInit(): void {

    this.lightService.GetAllLightLogs()
    .subscribe((data) => {
      console.log(data);
      this.lightLogs=data;
    })}

    //Ajust code to only give the latest from DB
    lightLogs: Light[] = [];
    temperatures: Temperature[] = [];

  dashTemperatures = DASHTEMPERATURES;
}
