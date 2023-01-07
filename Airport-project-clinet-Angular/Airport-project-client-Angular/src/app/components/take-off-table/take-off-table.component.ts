import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-off-table',
  templateUrl: './take-off-table.component.html',
  styleUrls: ['./take-off-table.component.css']
})
export class TakeOffStationsComponent implements OnInit {

  constructor() { }
@Input() airplanes:any;
  ngOnInit(): void {
  }

}
