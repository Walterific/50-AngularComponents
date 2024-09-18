import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelsestatementComponent } from './ifelsestatement.component';

describe('IfelsestatementComponent', () => {
  let component: IfelsestatementComponent;
  let fixture: ComponentFixture<IfelsestatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfelsestatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfelsestatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
