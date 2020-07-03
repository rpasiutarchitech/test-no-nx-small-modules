import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container7Component } from './lib16-container7.component';

describe('Lib16Container7Component', () => {
  let component: Lib16Container7Component;
  let fixture: ComponentFixture<Lib16Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
