import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18SharedComponent1Component } from './lib18-shared-component1.component';

describe('Lib18SharedComponent1Component', () => {
  let component: Lib18SharedComponent1Component;
  let fixture: ComponentFixture<Lib18SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
