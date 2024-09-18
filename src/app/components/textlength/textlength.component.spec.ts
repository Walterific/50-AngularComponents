import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextlengthComponent } from './textlength.component';

describe('TextlengthComponent', () => {
  let component: TextlengthComponent;
  let fixture: ComponentFixture<TextlengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextlengthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextlengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
