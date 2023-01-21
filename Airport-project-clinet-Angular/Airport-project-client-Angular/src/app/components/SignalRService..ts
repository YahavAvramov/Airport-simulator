import StationData from 'src/models/StationData';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";


@Injectable({
  providedIn: 'root'
})


export class SignalRService {

  private url = "https://localhost:7186/AirportHub";
  private hubConnection!: signalR.HubConnection;
  data!: StationData;



  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.url)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }


  on = () => {
    this.hubConnection.on("ReciveStationStatus", (data) => {
      alert(data);
      this.data = data as StationData;

    })
  }
}
