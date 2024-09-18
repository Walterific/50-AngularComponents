import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamevalidatorComponent } from './usernamevalidator.component';

describe('UsernamevalidatorComponent', () => {
  let component: UsernamevalidatorComponent;
  let fixture: ComponentFixture<UsernamevalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernamevalidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernamevalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
