import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingStationsComponent } from './landing-stations.component';

describe('LandingStationsComponent', () => {
  let component: LandingStationsComponent;
  let fixture: ComponentFixture<LandingStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
