import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-stations',
  templateUrl: './landing-stations.component.html',
  styleUrls: ['./landing-stations.component.css']
})
export class LandingStationsComponent implements OnInit {

  constructor() { }
@Input() airplanes:any;
  ngOnInit(): void {
  }

}
