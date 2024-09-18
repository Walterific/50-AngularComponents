import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FahrenheittocelsiusComponent } from './fahrenheittocelsius.component';

describe('FahrenheittocelsiusComponent', () => {
  let component: FahrenheittocelsiusComponent;
  let fixture: ComponentFixture<FahrenheittocelsiusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FahrenheittocelsiusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FahrenheittocelsiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
