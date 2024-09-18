import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordshufflerComponent } from './wordshuffler.component';

describe('WordshufflerComponent', () => {
  let component: WordshufflerComponent;
  let fixture: ComponentFixture<WordshufflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordshufflerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordshufflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
