import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcounterComponent } from './wordcounter.component';

describe('WordcounterComponent', () => {
  let component: WordcounterComponent;
  let fixture: ComponentFixture<WordcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
