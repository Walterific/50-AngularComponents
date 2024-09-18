import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedforloopComponent } from './nestedforloop.component';

describe('NestedforloopComponent', () => {
  let component: NestedforloopComponent;
  let fixture: ComponentFixture<NestedforloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedforloopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedforloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
