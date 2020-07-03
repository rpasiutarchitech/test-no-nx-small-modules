import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7SharedComponent1Component } from './lib7-shared-component1.component';

describe('Lib7SharedComponent1Component', () => {
  let component: Lib7SharedComponent1Component;
  let fixture: ComponentFixture<Lib7SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
