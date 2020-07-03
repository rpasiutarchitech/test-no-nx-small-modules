import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5SharedComponent1Component } from './lib5-shared-component1.component';

describe('Lib5SharedComponent1Component', () => {
  let component: Lib5SharedComponent1Component;
  let fixture: ComponentFixture<Lib5SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
