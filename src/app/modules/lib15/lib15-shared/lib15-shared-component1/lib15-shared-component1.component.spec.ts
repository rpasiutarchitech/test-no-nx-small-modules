import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15SharedComponent1Component } from './lib15-shared-component1.component';

describe('Lib15SharedComponent1Component', () => {
  let component: Lib15SharedComponent1Component;
  let fixture: ComponentFixture<Lib15SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
