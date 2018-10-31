import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAngularLibraryComponent } from './some-angular-library.component';

describe('SomeAngularLibraryComponent', () => {
  let component: SomeAngularLibraryComponent;
  let fixture: ComponentFixture<SomeAngularLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeAngularLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeAngularLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
