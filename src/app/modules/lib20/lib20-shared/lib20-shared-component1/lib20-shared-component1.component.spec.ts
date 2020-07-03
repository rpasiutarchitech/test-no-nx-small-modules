import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20SharedComponent1Component } from './lib20-shared-component1.component';

describe('Lib20SharedComponent1Component', () => {
  let component: Lib20SharedComponent1Component;
  let fixture: ComponentFixture<Lib20SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
