import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenoddcheckerComponent } from './evenoddchecker.component';

describe('EvenoddcheckerComponent', () => {
  let component: EvenoddcheckerComponent;
  let fixture: ComponentFixture<EvenoddcheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenoddcheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenoddcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
