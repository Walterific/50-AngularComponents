import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForofloopComponent } from './forofloop.component';

describe('ForofloopComponent', () => {
  let component: ForofloopComponent;
  let fixture: ComponentFixture<ForofloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForofloopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForofloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
