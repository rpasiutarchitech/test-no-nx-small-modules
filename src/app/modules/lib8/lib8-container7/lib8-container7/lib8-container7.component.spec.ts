import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container7Component } from './lib8-container7.component';

describe('Lib8Container7Component', () => {
  let component: Lib8Container7Component;
  let fixture: ComponentFixture<Lib8Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
