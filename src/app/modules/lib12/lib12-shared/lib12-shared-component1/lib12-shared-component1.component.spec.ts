import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12SharedComponent1Component } from './lib12-shared-component1.component';

describe('Lib12SharedComponent1Component', () => {
  let component: Lib12SharedComponent1Component;
  let fixture: ComponentFixture<Lib12SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
