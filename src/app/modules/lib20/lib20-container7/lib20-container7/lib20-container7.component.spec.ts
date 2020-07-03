import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container7Component } from './lib20-container7.component';

describe('Lib20Container7Component', () => {
  let component: Lib20Container7Component;
  let fixture: ComponentFixture<Lib20Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
