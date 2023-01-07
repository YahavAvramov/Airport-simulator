import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAirplaneDisplayComponent } from './all-airplane-display.component';

describe('AllAirplaneDisplayComponent', () => {
  let component: AllAirplaneDisplayComponent;
  let fixture: ComponentFixture<AllAirplaneDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAirplaneDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAirplaneDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
