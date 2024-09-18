import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyconverterComponent } from './currencyconverter.component';

describe('CurrencyconverterComponent', () => {
  let component: CurrencyconverterComponent;
  let fixture: ComponentFixture<CurrencyconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
