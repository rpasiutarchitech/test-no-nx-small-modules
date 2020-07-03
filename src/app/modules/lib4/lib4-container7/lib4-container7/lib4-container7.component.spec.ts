import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container7Component } from './lib4-container7.component';

describe('Lib4Container7Component', () => {
  let component: Lib4Container7Component;
  let fixture: ComponentFixture<Lib4Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
