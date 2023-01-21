import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import Airplane from 'src/models/Airplane';

@Injectable({
  providedIn: 'root'
})



export class AirportServiceService {

  private url = 'https://localhost:7186/';
  private urlJson = 'http://localhost:4100/airplanes';


  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url + "GetAirplanes");
  }

  getTakeOffPlan() {
    return this.http.get(this.url + "GetTakeOffAirplane")
  }



//get id and delte the airplane from the data by this id
delete(id:number){
  return this.http.delete(this.url+ "DleteAriplane/"+id)
}

addAirplane(airplane:any) {
  const headers = { 'content-type': 'application/json'}  
  const body=JSON.stringify(airplane);
  console.log(body)
  return this.http.post(this.url + "AddAirplane" , airplane)
}


startTakeOffStation(airplane:Airplane) {
  return this.http.post(this.url+ "StartTakeOffStation",airplane)
}

startLandingStation(airplane :Airplane){
  return this.http.post(this.url +"StartLandingStation" , airplane)
}
}
