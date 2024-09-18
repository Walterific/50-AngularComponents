import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestcalculatorComponent } from './interestcalculator.component';

describe('InterestcalculatorComponent', () => {
  let component: InterestcalculatorComponent;
  let fixture: ComponentFixture<InterestcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
