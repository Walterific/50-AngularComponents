import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleformComponent } from './simpleform.component';

describe('SimpleformComponent', () => {
  let component: SimpleformComponent;
  let fixture: ComponentFixture<SimpleformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
