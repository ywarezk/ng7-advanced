import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFromServerComponent } from './todo-from-server.component';

describe('TodoFromServerComponent', () => {
  let component: TodoFromServerComponent;
  let fixture: ComponentFixture<TodoFromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
