import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14SharedComponent1Component } from './lib14-shared-component1.component';

describe('Lib14SharedComponent1Component', () => {
  let component: Lib14SharedComponent1Component;
  let fixture: ComponentFixture<Lib14SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
