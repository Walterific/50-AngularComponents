import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleloginComponent } from './simplelogin.component';

describe('SimpleloginComponent', () => {
  let component: SimpleloginComponent;
  let fixture: ComponentFixture<SimpleloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
