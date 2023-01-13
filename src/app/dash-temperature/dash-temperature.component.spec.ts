import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashTemperatureComponent } from './dash-temperature.component';

describe('DashTemperatureComponent', () => {
  let component: DashTemperatureComponent;
  let fixture: ComponentFixture<DashTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashTemperatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
