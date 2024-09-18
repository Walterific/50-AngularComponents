import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessnumbergameComponent } from './guessnumbergame.component';

describe('GuessnumbergameComponent', () => {
  let component: GuessnumbergameComponent;
  let fixture: ComponentFixture<GuessnumbergameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessnumbergameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessnumbergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
