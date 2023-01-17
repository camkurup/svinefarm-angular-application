import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashLightComponent } from './dash-light/dash-light.component';
import { DashTemperatureComponent } from './dash-temperature/dash-temperature.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LightComponent } from './light/light.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from "../environments/environment";
import { initializeApp } from "firebase/app";
import { HttpClientModule } from '@angular/common/http';
initializeApp(environment.firebase);

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
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
