import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundinterestcalculatorComponent } from './compoundinterestcalculator.component';

describe('CompoundinterestcalculatorComponent', () => {
  let component: CompoundinterestcalculatorComponent;
  let fixture: ComponentFixture<CompoundinterestcalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundinterestcalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundinterestcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
