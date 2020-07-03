import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container7Component } from './lib13-container7.component';

describe('Lib13Container7Component', () => {
  let component: Lib13Container7Component;
  let fixture: ComponentFixture<Lib13Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
