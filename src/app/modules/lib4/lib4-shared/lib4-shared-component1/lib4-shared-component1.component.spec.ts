import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4SharedComponent1Component } from './lib4-shared-component1.component';

describe('Lib4SharedComponent1Component', () => {
  let component: Lib4SharedComponent1Component;
  let fixture: ComponentFixture<Lib4SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
