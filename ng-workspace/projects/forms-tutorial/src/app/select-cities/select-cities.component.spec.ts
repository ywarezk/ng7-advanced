import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCitiesComponent } from './select-cities.component';

describe('SelectCitiesComponent', () => {
  let component: SelectCitiesComponent;
  let fixture: ComponentFixture<SelectCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
