import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  {path:"", component: DashboardComponent},
  {path:"temperature", component: TemperatureComponent},
  {path:"light", component: LightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
