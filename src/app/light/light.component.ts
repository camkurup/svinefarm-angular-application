import { Component } from '@angular/core';
import { Light } from '../Interfaces/light';
import { LightService } from '../_services/light.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent {

  constructor(private lightService: LightService) { }
  ngOnInit(): void {

    this.lightService.GetAllLightLogs()
    .subscribe((data) => {
      console.log(data);
    })}

    lightLogs: Light[] = [];

}
