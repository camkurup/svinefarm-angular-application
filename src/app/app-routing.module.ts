import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemperatureComponent } from './temperature/temperature.component';

const routes: Routes = [
  {path:"", component: DashboardComponent},
  {path:"temperature", component: TemperatureComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
