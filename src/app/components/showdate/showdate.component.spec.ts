import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdateComponent } from './showdate.component';

describe('ShowdateComponent', () => {
  let component: ShowdateComponent;
  let fixture: ComponentFixture<ShowdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
