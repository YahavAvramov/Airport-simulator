import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AirportServiceService } from './service/airport.service';
import Airplane from 'src/models/Airplane';
import AirplainCompanyNames from 'src/models/AirplainCompanyNames';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private airportService: AirportServiceService) { }
  airplaneList: Airplane[] = [];

  airplanesTakeOffList: any[] = [];
  airplaneLandingList: any[] = [];
  isairplanesTakeOffListHasPlanes:boolean = false;
  airplaneTakeOff: any;
  airplineLanding: any;


  title = "app";

  ngOnInit() {
    this.airportService.get().subscribe(
      (response) => { this.airplaneList = response as Airplane[]; },
      (error) => { console.log("Eror : " + error); });


    this.airportService.getTakeOffPlan().subscribe(
      (response) => {
        this.airplaneTakeOff = response;
      },
      (error) => { console.log("Eror : " + error); });


  }

  updateAirplaneListFromDb() {
    this.airportService.get().subscribe(
      (response) => { this.airplaneList = response as Airplane[]; },
      (error) => { console.log("Eror : " + error); });
  }

  //event for button take-off plane
  //this get a random airplane from the data base
 eventHandlerTakeOff(event: any)
   {
    console.log(event);
    if(event != null && event != undefined){
       this.airplaneTakeOff = event;
   this.airplanesTakeOffList.push(event);
   this.airportService.delete(event.airplaneId).subscribe();
   this.updateAirplaneListFromDb();

   if(this.airplaneList.length <=0 ){
    this.isairplanesTakeOffListHasPlanes = true;
  }
    }

  }


  //event for button landing plane
  eventHandlerLandingPlan(event: any) {

    this.airplineLanding = this.getPlainDitails();
    this.airplaneLandingList.push(this.airplineLanding);

  }

  getPlainDitails() {
    var number = Math.floor(AirplainCompanyNames.Names.length);
    var num = Math.floor(Math.random() * AirplainCompanyNames.Names.length);
    const companyName = AirplainCompanyNames.Names[num];
    const flightNumber = Math.floor(Math.random() * 1000000).toString();
    const status = "Ok";
    // console.log(companyName);
    let newDate: any = new Date();
    return new Airplane(companyName, flightNumber, status, newDate);
  }
}
