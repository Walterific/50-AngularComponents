import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisiblecheckerComponent } from './divisiblechecker.component';

describe('DivisiblecheckerComponent', () => {
  let component: DivisiblecheckerComponent;
  let fixture: ComponentFixture<DivisiblecheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisiblecheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisiblecheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
