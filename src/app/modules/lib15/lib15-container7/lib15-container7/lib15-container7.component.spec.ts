import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container7Component } from './lib15-container7.component';

describe('Lib15Container7Component', () => {
  let component: Lib15Container7Component;
  let fixture: ComponentFixture<Lib15Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
