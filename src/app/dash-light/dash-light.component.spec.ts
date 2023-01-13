import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLightComponent } from './dash-light.component';

describe('DashLightComponent', () => {
  let component: DashLightComponent;
  let fixture: ComponentFixture<DashLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
