import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Container7Component } from './lib7-container7.component';

describe('Lib7Container7Component', () => {
  let component: Lib7Container7Component;
  let fixture: ComponentFixture<Lib7Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
