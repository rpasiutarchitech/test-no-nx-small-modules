import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29SharedComponent1Component } from './lib29-shared-component1.component';

describe('Lib29SharedComponent1Component', () => {
  let component: Lib29SharedComponent1Component;
  let fixture: ComponentFixture<Lib29SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
