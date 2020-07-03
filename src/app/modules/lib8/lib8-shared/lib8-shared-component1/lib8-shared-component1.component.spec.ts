import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8SharedComponent1Component } from './lib8-shared-component1.component';

describe('Lib8SharedComponent1Component', () => {
  let component: Lib8SharedComponent1Component;
  let fixture: ComponentFixture<Lib8SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
