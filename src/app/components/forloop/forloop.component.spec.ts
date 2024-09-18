import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloopComponent } from './forloop.component';

describe('ForloopComponent', () => {
  let component: ForloopComponent;
  let fixture: ComponentFixture<ForloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForloopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
