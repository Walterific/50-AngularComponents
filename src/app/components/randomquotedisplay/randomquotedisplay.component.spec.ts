import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomquotedisplayComponent } from './randomquotedisplay.component';

describe('RandomquotedisplayComponent', () => {
  let component: RandomquotedisplayComponent;
  let fixture: ComponentFixture<RandomquotedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomquotedisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomquotedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
