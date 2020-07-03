import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container7Component } from './lib23-container7.component';

describe('Lib23Container7Component', () => {
  let component: Lib23Container7Component;
  let fixture: ComponentFixture<Lib23Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
