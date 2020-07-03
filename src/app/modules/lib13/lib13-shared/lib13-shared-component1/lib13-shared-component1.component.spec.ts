import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13SharedComponent1Component } from './lib13-shared-component1.component';

describe('Lib13SharedComponent1Component', () => {
  let component: Lib13SharedComponent1Component;
  let fixture: ComponentFixture<Lib13SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
