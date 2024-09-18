import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowusernameComponent } from './showusername.component';

describe('ShowusernameComponent', () => {
  let component: ShowusernameComponent;
  let fixture: ComponentFixture<ShowusernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowusernameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
