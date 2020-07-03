import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container7Component } from './lib29-container7.component';

describe('Lib29Container7Component', () => {
  let component: Lib29Container7Component;
  let fixture: ComponentFixture<Lib29Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
