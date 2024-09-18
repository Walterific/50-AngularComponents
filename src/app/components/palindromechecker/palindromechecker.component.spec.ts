import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromecheckerComponent } from './palindromechecker.component';

describe('PalindromecheckerComponent', () => {
  let component: PalindromecheckerComponent;
  let fixture: ComponentFixture<PalindromecheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalindromecheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalindromecheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
