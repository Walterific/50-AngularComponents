import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcasestatementComponent } from './switchcasestatement.component';

describe('SwitchcasestatementComponent', () => {
  let component: SwitchcasestatementComponent;
  let fixture: ComponentFixture<SwitchcasestatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchcasestatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchcasestatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
