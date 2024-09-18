import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserageComponent } from './userage.component';

describe('UserageComponent', () => {
  let component: UserageComponent;
  let fixture: ComponentFixture<UserageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
