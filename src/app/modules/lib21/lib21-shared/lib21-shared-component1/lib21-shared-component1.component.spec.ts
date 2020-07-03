import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21SharedComponent1Component } from './lib21-shared-component1.component';

describe('Lib21SharedComponent1Component', () => {
  let component: Lib21SharedComponent1Component;
  let fixture: ComponentFixture<Lib21SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
