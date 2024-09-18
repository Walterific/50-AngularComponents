import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureconverterComponent } from './temperatureconverter.component';

describe('TemperatureconverterComponent', () => {
  let component: TemperatureconverterComponent;
  let fixture: ComponentFixture<TemperatureconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
