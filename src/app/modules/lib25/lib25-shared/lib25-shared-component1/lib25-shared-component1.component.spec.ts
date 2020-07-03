import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25SharedComponent1Component } from './lib25-shared-component1.component';

describe('Lib25SharedComponent1Component', () => {
  let component: Lib25SharedComponent1Component;
  let fixture: ComponentFixture<Lib25SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
