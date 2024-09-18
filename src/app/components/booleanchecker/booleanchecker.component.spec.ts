import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleancheckerComponent } from './booleanchecker.component';

describe('BooleancheckerComponent', () => {
  let component: BooleancheckerComponent;
  let fixture: ComponentFixture<BooleancheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooleancheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooleancheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
