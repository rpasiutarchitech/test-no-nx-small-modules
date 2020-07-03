import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container7Component } from './lib30-container7.component';

describe('Lib30Container7Component', () => {
  let component: Lib30Container7Component;
  let fixture: ComponentFixture<Lib30Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
