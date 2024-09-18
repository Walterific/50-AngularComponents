import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayhelloworldComponent } from './displayhelloworld.component';

describe('DisplayhelloworldComponent', () => {
  let component: DisplayhelloworldComponent;
  let fixture: ComponentFixture<DisplayhelloworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayhelloworldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayhelloworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
