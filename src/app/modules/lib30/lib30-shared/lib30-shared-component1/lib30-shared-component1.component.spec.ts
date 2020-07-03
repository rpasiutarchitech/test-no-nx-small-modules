import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30SharedComponent1Component } from './lib30-shared-component1.component';

describe('Lib30SharedComponent1Component', () => {
  let component: Lib30SharedComponent1Component;
  let fixture: ComponentFixture<Lib30SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
