import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonaccigeneratorComponent } from './fibonaccigenerator.component';

describe('FibonaccigeneratorComponent', () => {
  let component: FibonaccigeneratorComponent;
  let fixture: ComponentFixture<FibonaccigeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FibonaccigeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibonaccigeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
