import { TakeOffComponent } from './../take-offBtn/take-off.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { delay } from 'rxjs/operators';
import { AirportServiceService } from 'src/app/service/airport.service';

@Component({
  selector: 'app-flight-manager',
  templateUrl: './flight-manager.component.html',
  styleUrls: ['./flight-manager.component.css']
})

export class FlightManagerComponent implements OnInit {

  constructor(private airportService: AirportServiceService) { }
  @Input() takeOffList: any[] = [];
  @Input() landingList: any[] = [];

  @Output() updateAirplaneList: EventEmitter<any> = new EventEmitter<any>();
  interval: string | number | NodeJS.Timer | undefined;
  count: Number = 1;

  oneIsStationFree: boolean = true
  towIsStationFree: boolean = true;
  threeIsStationFree: boolean = true;
  fourIsStationFree: boolean = true;
  fiveIsStationFree: boolean = true;
  sixIsStationFree: boolean = true;
  sevenIsStationFree: boolean = true;
  eightIsStationFree: boolean = true;
  nineIsStationFree: boolean = true;


  ngOnInit(): void {

    this.startTimer();


  }
  // in this seation the airplanes moving in the check stations
  // airplane that land will do the route of stations - 1 => 2 => 3 => 4 => 5 => 6 / 7
  //airplane that takeoff will do the route of stations - 7 => 8 => 4 => 9

  

  updateAppComponent() {
    this.updateAirplaneList.emit()
  }

  //this function will sync the tow lists of planes and send each one to his station order
  startTimer() {
    this.interval = setInterval(() => {
      if (this.takeOffList.length > 0 || this.landingList.length > 0) {
        this.airplaneStartStations();
      }
      else { null }

    }, 1500)
  }


  airplaneStartStations() {
    console.log("start");
    if (Number(this.count) % 2 == 0 && this.takeOffList.length > 0 || this.landingList.length <= 0) { //take of plane
      this.count = Number(this.count) + 1;

      if (this.sevenIsStationFree) {
         this.sevenIsStationFree = false; //make this station unvalble
        const takeOffPlane = this.takeOffList.pop();
        this.Sseven(takeOffPlane, false);
      }
      else {
        let intervalId = setInterval(async () => {
          if (this.sevenIsStationFree) {
            clearInterval(intervalId);
            const takeOffPlane = this.takeOffList.pop();
            this.sevenIsStationFree = false;
            this.Sseven(takeOffPlane , false);
          }
          else { await null }
        }, 100);

      }
    }
    
    else if (this.landingList.length > 0) { //landing plane
    
      this.count = Number(this.count) + 1;
      if (this.oneIsStationFree) {
        const planeLanding = this.landingList.pop();
        this.oneIsStationFree = false;
      
          this.sOne(planeLanding)
      }
      else {
        let intervalId = setInterval(async () => {
          if (this.oneIsStationFree) {
            const planeLanding = this.landingList.pop();
            this.oneIsStationFree = false;
            clearInterval(intervalId);
            this.sOne(planeLanding);
          }
          else { await null }
        }, 100);
      }
    }
    else{null}
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  // Station 1
  sOne(planeLanding: any) {
    this.oneIsStationFree = false;

    if (planeLanding != null) {

      let box = document.getElementById('station1');// display to ui 
      box!.innerText = planeLanding.companyName + " " + planeLanding.flightNumber +"\n \n \n ✈";
      box!.style.backgroundColor = "green";
      console.log("Landing plane in station one");

      setTimeout(() => {
        console.log("station one - finish");

        if (this.towIsStationFree) {
          box!.innerText = "1";
          box!.style.backgroundColor = "pink";
          this.sTwo(planeLanding);
        }
        else {
          let intervalId = setInterval(async () => {
            if (this.towIsStationFree) {
              clearInterval(intervalId);
              box!.innerText = "1";
              box!.style.backgroundColor = "pink";
              this.sTwo(planeLanding);
            }
            else { await null }
          }, 100);

        }
      }, 2000);



    }
  }
  // Station 2
  sTwo(planeLanding: any) {
    this.towIsStationFree = false;
    this.oneIsStationFree = true;

    console.log("Landing plane in station tow");
    let box = document.getElementById('station2'); // display to ui 
    box!.innerText = planeLanding.companyName + " " + planeLanding.flightNumber;
    box!.style.backgroundColor = "green";

    setTimeout(() => {
      console.log("station tow - finish");
      if (this.threeIsStationFree) {
        box!.innerText = "2";
        box!.style.backgroundColor = "pink";
        this.Sthree(planeLanding);
      }
      else {
        let intervalId = setInterval(async () => {
          if (this.threeIsStationFree) {
            clearInterval(intervalId);
            box!.innerText = "2";
            box!.style.backgroundColor = "pink";
            this.Sthree(planeLanding);
          }
          else { await null }
        }, 100);  // whating...
      }

    }, 2000);


  }
  // Station 3
  Sthree(planeLanding: any) {
    this.threeIsStationFree = false;
    this.towIsStationFree = true;

    console.log("Landing plane in station three");
    let box = document.getElementById('station3'); // display to ui 
    box!.innerText = planeLanding.companyName + " " + planeLanding.flightNumber
    box!.style.backgroundColor = "green";

    setTimeout(() => {
      console.log("station three - finish")
      if (this.fourIsStationFree) {
        box!.innerText = "3";
        box!.style.backgroundColor = "pink";
        this.Sfour(planeLanding, true);
      }
      else {
        let intervalId = setInterval(async () => {
          if (this.fourIsStationFree) {
                clearInterval(intervalId);
            box!.innerText = "3";
            box!.style.backgroundColor = "pink";
            this.Sfour(planeLanding, true);
          }
          else { await null }
        }, 100); // whating...

      }

    }, 2000);

  }

  // Station 4
  Sfour(plane: any, isthisPlaneIsLanding: boolean) {
    this.fourIsStationFree = false;

    console.log(" plane in station four");

    let box = document.getElementById('station4'); // display to ui 
    box!.innerText = plane.companyName + " " + plane.flightNumber


    console.log("station four - finish")
    if (isthisPlaneIsLanding == true) { //if the plane is a landing plane so its go to station five
      this.threeIsStationFree = true;
      box!.style.backgroundColor = "green";
      setTimeout(() => {
        if (this.fiveIsStationFree) {
          box!.innerText = "4";
          box!.style.backgroundColor = "pink";
          this.Sfive(plane);
        }
        else {
          let intervalId = setInterval(async () => {
            if (this.fiveIsStationFree) {
              clearInterval(intervalId);
              box!.innerText = "4";
              box!.style.backgroundColor = "pink";
              this.Sfive(plane);
            }
            else { await null }
          }, 100);//whating..
        }
      }, 2000)

    }
    else {//if the plane is a take off plane so its go to station nine
      this.eightIsStationFree = true;
      box!.style.backgroundColor = "blue";
      setTimeout(() => {
        if (this.nineIsStationFree) {
          box!.innerText = "4";
          box!.style.backgroundColor = "pink";
          this.Snine(plane)
        }
        else {
          let intervalId = setInterval(async () => {
            if (this.nineIsStationFree) {
              clearInterval(intervalId);
              box!.innerText = "4";
              box!.style.backgroundColor = "pink";
              this.Snine(plane);
            }
            else { await null }
          }, 100); //whating

        }
      }, 2000)

    }
  }

  // Station 5
  //this landing plane can pass by station 6 or station 7 
  Sfive(landingPlane: any) {
    this.fiveIsStationFree = false;
    this.fourIsStationFree = true;

    console.log("Landing plane in station five");
    let box = document.getElementById('station5'); // display to ui 
    box!.innerText = landingPlane.companyName + " " + landingPlane.flightNumber;
    box!.style.backgroundColor = "green";

    setTimeout(() => {
      console.log("station five - finish")
      if (this.sixIsStationFree) { //if station 6 is free
        box!.innerText = "5";
        box!.style.backgroundColor = "pink";
        this.Ssix(landingPlane);
      }
      else if (this.sevenIsStationFree) { //if station 7 is free
        box!.innerText = "5";
        box!.style.backgroundColor = "pink";
        this.Sseven(landingPlane, true);
      }
      else { // if station 6 and station 7 are busy
        let intervalId = setInterval(async () => {
          if (this.sixIsStationFree) { // if station 6 get free
            clearInterval(intervalId);
            box!.innerText = "5";
        box!.style.backgroundColor = "pink";
        this.Ssix(landingPlane);
          }
          else if (this.sevenIsStationFree) { //if station 7 get free before station 6 so go to station 7
            box!.innerText = "5";
            box!.style.backgroundColor = "pink";
            this.Sseven(landingPlane, true);
          }
          else { await null }
        }, 100);
       
      }
    }, 2000);


  }

  // Station 6
  Ssix(landingPlane: any) {
    this.sixIsStationFree = false;
    this.fiveIsStationFree = true;

    console.log("Landing plane in station six");
    let box = document.getElementById('station6'); // display to ui 
    box!.innerText = landingPlane.companyName + " " + landingPlane.flightNumber;
    box!.style.backgroundColor = "green";

    this.airportService.addAirplane(landingPlane).subscribe(); //add plane to db
    this.updateAppComponent(); // updae the main ui list of planes- this is a callbeck function 
    setTimeout(() => {
      console.log("station six - finish")
      box!.innerText = "6";
      box!.style.backgroundColor = "pink";
      this.sixIsStationFree = true;
    }, 2000);
  }

  // Station 7
  Sseven(plane: any, isPlaneLanding: boolean) {
    this.sevenIsStationFree = false;

    let box = document.getElementById('station7'); // display to ui 
    box!.innerText = plane.companyName + " " + plane.flightNumber +"\n \n \n ✈";

    //when the plane is a landing plane
    if (isPlaneLanding) {

      this.airportService.addAirplane(plane).subscribe(); //add plane to db
      this.updateAppComponent();  // updae the main ui list of planes- this is a callbeck function 
      console.log("Landing plane in station seven");
      box!.style.backgroundColor = "green";

      setTimeout(() => {
        console.log("station seven - finish")
        box!.innerText = "7";
        box!.style.backgroundColor = "pink";
        this.sevenIsStationFree = true;
        this.fiveIsStationFree = true;
      }, 2000);
    }
    //when the plane is a takeOff plane
    else {
      console.log("takeoff plane in station seven");
      box!.style.backgroundColor = "blue";

      setTimeout(() => {
        console.log("station seven - finish");

        if (this.eightIsStationFree) {
          box!.innerText = "7";
          box!.style.backgroundColor = "pink";
          this.sevenIsStationFree = true;
          this.Seight(plane);
        }
        else {
          let intervalId = setInterval(async () => {// whating for station 8 to be free
            if (this.eightIsStationFree) {
              clearInterval(intervalId);
              box!.innerText = "7";
              box!.style.backgroundColor = "pink";
              this.sevenIsStationFree = true;
              this.Seight(plane);
            }
            else { await null }
          }, 100);
        }
      }, 2000);
    }
  }

  // Station 8
  Seight(takeOffPlane: any) {
    this.eightIsStationFree = false;
    this.sevenIsStationFree = true;

    console.log("takeoff plane in station eight");
    let box = document.getElementById('station8'); // display to ui 
    box!.innerText = takeOffPlane.companyName + " " + takeOffPlane.flightNumber;
    box!.style.backgroundColor = "blue";

    setTimeout(() => {
      console.log("station eight - finish")
      if (this.fourIsStationFree) {
        box!.innerText = "8";
        box!.style.backgroundColor = "pink";
        this.Sfour(takeOffPlane, false);
      }
      else {
        let intervalId = setInterval(async () => {//whating for station four to be free
          if (this.fourIsStationFree) {
             clearInterval(intervalId);
            box!.innerText = "8";
            box!.style.backgroundColor = "pink";
            this.Sfour(takeOffPlane, false);
          }
          else { await null }
        }, 100);
      }

    }, 2000);


  }
  // Statiuon 9
  Snine(takeOffPlane: any) {
    this.nineIsStationFree = false;
    this.fourIsStationFree = true;

    // this.airportService.delete(takeOffPlane.airplaneId).subscribe(); //removing the plane from the db 
    this.updateAppComponent();// updae the main ui list of planes- this is a callbeck function 

    console.log("takeoff plane in station nine");
    let box = document.getElementById('station9'); // display to ui 
    box!.innerText = takeOffPlane.companyName + " " + takeOffPlane.flightNumber;
    box!.style.backgroundColor = "blue";

    setTimeout(() => {
      console.log("station nine - finish")
      box!.innerText = "9";
      box!.style.backgroundColor = "pink";
      this.nineIsStationFree = true;
    }, 2000);
  }
}




