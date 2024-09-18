import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactercounterComponent } from './charactercounter.component';

describe('CharactercounterComponent', () => {
  let component: CharactercounterComponent;
  let fixture: ComponentFixture<CharactercounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactercounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactercounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
