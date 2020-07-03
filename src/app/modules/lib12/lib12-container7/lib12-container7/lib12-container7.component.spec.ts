import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container7Component } from './lib12-container7.component';

describe('Lib12Container7Component', () => {
  let component: Lib12Container7Component;
  let fixture: ComponentFixture<Lib12Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
