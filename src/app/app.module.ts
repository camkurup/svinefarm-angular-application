import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashLightComponent } from './dash-light/dash-light.component';
import { DashTemperatureComponent } from './dash-temperature/dash-temperature.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LightComponent } from './light/light.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashLightComponent,
    DashTemperatureComponent,
    TemperatureComponent,
    LightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
