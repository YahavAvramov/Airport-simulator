import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightManagerComponent } from './flight-manager.component';

describe('FlightManagerComponent', () => {
  let component: FlightManagerComponent;
  let fixture: ComponentFixture<FlightManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
