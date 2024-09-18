import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhileloopComponent } from './whileloop.component';

describe('WhileloopComponent', () => {
  let component: WhileloopComponent;
  let fixture: ComponentFixture<WhileloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhileloopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhileloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
