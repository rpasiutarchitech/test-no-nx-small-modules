import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1SharedComponent1Component } from './lib1-shared-component1.component';

describe('Lib1SharedComponent1Component', () => {
  let component: Lib1SharedComponent1Component;
  let fixture: ComponentFixture<Lib1SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
