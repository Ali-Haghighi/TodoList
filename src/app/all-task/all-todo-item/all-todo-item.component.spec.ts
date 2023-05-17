import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTodoItemComponent } from './all-todo-item.component';

describe('AllTodoItemComponent', () => {
  let component: AllTodoItemComponent;
  let fixture: ComponentFixture<AllTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
