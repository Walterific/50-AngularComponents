import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsumcalculatorComponent } from './oddsumcalculator.component';

describe('OddsumcalculatorComponent', () => {
  let component: OddsumcalculatorComponent;
  let fixture: ComponentFixture<OddsumcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OddsumcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddsumcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
