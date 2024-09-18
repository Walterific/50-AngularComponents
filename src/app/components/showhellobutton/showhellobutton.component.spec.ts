import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhellobuttonComponent } from './showhellobutton.component';

describe('ShowhellobuttonComponent', () => {
  let component: ShowhellobuttonComponent;
  let fixture: ComponentFixture<ShowhellobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowhellobuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowhellobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
