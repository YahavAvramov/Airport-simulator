import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { LandingComponent } from './components/landingBtn/landing.component';
import { TakeOffComponent } from './components/take-offBtn/take-off.component';
import { AllAirplaneDisplayComponent } from './components/all-airplane-display/all-airplane-display.component';
import { LandingStationsComponent } from './components/landing-stations/landing-stations.component';
import { TakeOffStationsComponent } from './components/take-off-table/take-off-table.component';
import { FlightManagerComponent } from './components/flight-manager/flight-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TakeOffComponent,
    AllAirplaneDisplayComponent,
    LandingStationsComponent,
    TakeOffStationsComponent,
    FlightManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
