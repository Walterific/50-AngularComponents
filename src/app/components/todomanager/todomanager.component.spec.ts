import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodomanagerComponent } from './todomanager.component';

describe('TodomanagerComponent', () => {
  let component: TodomanagerComponent;
  let fixture: ComponentFixture<TodomanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodomanagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodomanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
