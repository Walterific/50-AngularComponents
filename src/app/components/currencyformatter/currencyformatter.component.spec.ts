import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyformatterComponent } from './currencyformatter.component';

describe('CurrencyformatterComponent', () => {
  let component: CurrencyformatterComponent;
  let fixture: ComponentFixture<CurrencyformatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyformatterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyformatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
