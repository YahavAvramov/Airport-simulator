import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

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

//   addAirplaine(airplan: any) {
//     // this.http.post(this.url + "AddAirplane" , airplan);
//     const params = new HttpParams({
//       fromObject: { companyName: airplan.companyName }
//     }
//     );
//     var headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
//     //the HTTP post request
//     return this.http.post(this.url + "AddAirplane", params, { headers });
// }

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
}
