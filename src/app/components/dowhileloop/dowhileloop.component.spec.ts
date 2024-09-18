import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowhileloopComponent } from './dowhileloop.component';

describe('DowhileloopComponent', () => {
  let component: DowhileloopComponent;
  let fixture: ComponentFixture<DowhileloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowhileloopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowhileloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
