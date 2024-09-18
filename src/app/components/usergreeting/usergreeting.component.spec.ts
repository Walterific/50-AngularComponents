import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergreetingComponent } from './usergreeting.component';

describe('UsergreetingComponent', () => {
  let component: UsergreetingComponent;
  let fixture: ComponentFixture<UsergreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsergreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsergreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
