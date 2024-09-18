import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringmanipulatorComponent } from './stringmanipulator.component';

describe('StringmanipulatorComponent', () => {
  let component: StringmanipulatorComponent;
  let fixture: ComponentFixture<StringmanipulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringmanipulatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringmanipulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
