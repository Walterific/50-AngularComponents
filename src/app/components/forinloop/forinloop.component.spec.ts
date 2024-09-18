import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForinloopComponent } from './forinloop.component';

describe('ForinloopComponent', () => {
  let component: ForinloopComponent;
  let fixture: ComponentFixture<ForinloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForinloopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForinloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
