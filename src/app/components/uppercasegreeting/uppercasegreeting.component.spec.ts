import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercasegreetingComponent } from './uppercasegreeting.component';

describe('UppercasegreetingComponent', () => {
  let component: UppercasegreetingComponent;
  let fixture: ComponentFixture<UppercasegreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UppercasegreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppercasegreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
