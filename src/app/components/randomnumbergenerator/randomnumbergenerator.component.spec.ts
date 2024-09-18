import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomnumbergeneratorComponent } from './randomnumbergenerator.component';

describe('RandomnumbergeneratorComponent', () => {
  let component: RandomnumbergeneratorComponent;
  let fixture: ComponentFixture<RandomnumbergeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomnumbergeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomnumbergeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
