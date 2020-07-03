import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container7Component } from './lib14-container7.component';

describe('Lib14Container7Component', () => {
  let component: Lib14Container7Component;
  let fixture: ComponentFixture<Lib14Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
