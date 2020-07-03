import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container7Component } from './lib24-container7.component';

describe('Lib24Container7Component', () => {
  let component: Lib24Container7Component;
  let fixture: ComponentFixture<Lib24Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
