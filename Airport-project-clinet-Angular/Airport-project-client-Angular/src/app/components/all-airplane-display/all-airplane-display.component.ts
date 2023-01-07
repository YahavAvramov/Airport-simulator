import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-airplane-display',
  templateUrl: './all-airplane-display.component.html',
  styleUrls: ['./all-airplane-display.component.css']
})
export class AllAirplaneDisplayComponent implements OnInit {

  constructor() { }
@Input() airplane : any;

  ngOnInit(): void {
  }

}
