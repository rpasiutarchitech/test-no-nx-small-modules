import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container7Component } from './lib18-container7.component';

describe('Lib18Container7Component', () => {
  let component: Lib18Container7Component;
  let fixture: ComponentFixture<Lib18Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
