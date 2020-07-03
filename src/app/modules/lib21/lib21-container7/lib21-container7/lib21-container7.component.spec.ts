import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container7Component } from './lib21-container7.component';

describe('Lib21Container7Component', () => {
  let component: Lib21Container7Component;
  let fixture: ComponentFixture<Lib21Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
