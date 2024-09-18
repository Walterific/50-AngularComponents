import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialcalculatorComponent } from './factorialcalculator.component';

describe('FactorialcalculatorComponent', () => {
  let component: FactorialcalculatorComponent;
  let fixture: ComponentFixture<FactorialcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactorialcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactorialcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
