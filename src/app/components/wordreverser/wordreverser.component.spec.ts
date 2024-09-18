import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordreverserComponent } from './wordreverser.component';

describe('WordreverserComponent', () => {
  let component: WordreverserComponent;
  let fixture: ComponentFixture<WordreverserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordreverserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordreverserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
