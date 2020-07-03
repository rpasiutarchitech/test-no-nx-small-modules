import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container7Component } from './lib26-container7.component';

describe('Lib26Container7Component', () => {
  let component: Lib26Container7Component;
  let fixture: ComponentFixture<Lib26Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
