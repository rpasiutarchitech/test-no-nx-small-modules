import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26SharedComponent1Component } from './lib26-shared-component1.component';

describe('Lib26SharedComponent1Component', () => {
  let component: Lib26SharedComponent1Component;
  let fixture: ComponentFixture<Lib26SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
