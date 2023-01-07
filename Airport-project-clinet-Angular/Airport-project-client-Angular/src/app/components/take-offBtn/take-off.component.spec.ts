import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOffComponent } from './take-off.component';

describe('TakeOffComponent', () => {
  let component: TakeOffComponent;
  let fixture: ComponentFixture<TakeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
