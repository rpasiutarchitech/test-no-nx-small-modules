import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10SharedComponent1Component } from './lib10-shared-component1.component';

describe('Lib10SharedComponent1Component', () => {
  let component: Lib10SharedComponent1Component;
  let fixture: ComponentFixture<Lib10SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
