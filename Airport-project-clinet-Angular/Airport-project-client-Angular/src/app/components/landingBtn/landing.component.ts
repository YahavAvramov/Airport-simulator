import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
  @Output() landPlan:EventEmitter<any>= new EventEmitter<any>();
  
  ngOnInit(): void {
  }

  landAirplane(){
    this.landPlan.emit();
    
  }
}
