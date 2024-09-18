import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationtableComponent } from './multiplicationtable.component';

describe('MultiplicationtableComponent', () => {
  let component: MultiplicationtableComponent;
  let fixture: ComponentFixture<MultiplicationtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplicationtableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplicationtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
