import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404SharedComponent } from './error404-shared.component';

describe('Error404SharedComponent', () => {
  let component: Error404SharedComponent;
  let fixture: ComponentFixture<Error404SharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error404SharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404SharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
