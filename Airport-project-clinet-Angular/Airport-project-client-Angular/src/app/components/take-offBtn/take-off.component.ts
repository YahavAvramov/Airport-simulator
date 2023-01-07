import { AirportServiceService } from 'src/app/service/airport.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-take-off',
  templateUrl: './take-off.component.html',
  styleUrls: ['./take-off.component.css']
})
export class TakeOffComponent implements OnInit {
  constructor(private airportServiceService:AirportServiceService) { }

  @Output() TakeOfPlanEvent:EventEmitter<any>= new EventEmitter<any>();
  @Input() isairplanesTakeOffListHasPlanes:boolean = false;
  ngOnInit(): void {
  }
  takeOffPlane(){
       this.airportServiceService.getTakeOffPlan().subscribe(
      (rsponse)=>{
        if(rsponse == null || rsponse == undefined){alert('No airplanes in the airport!')}
           this.TakeOfPlanEvent.emit(rsponse);
       
      }
    )
  }
}
