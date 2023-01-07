import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOffStationsComponent } from './take-off-table.component';

describe('TakeOffStationsComponent', () => {
  let component: TakeOffStationsComponent;
  let fixture: ComponentFixture<TakeOffStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeOffStationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeOffStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
