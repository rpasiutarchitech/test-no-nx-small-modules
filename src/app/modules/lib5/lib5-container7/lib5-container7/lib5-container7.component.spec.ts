import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container7Component } from './lib5-container7.component';

describe('Lib5Container7Component', () => {
  let component: Lib5Container7Component;
  let fixture: ComponentFixture<Lib5Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
