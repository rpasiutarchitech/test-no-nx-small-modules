import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container6Component } from './lib5-container6.component';

describe('Lib5Container6Component', () => {
  let component: Lib5Container6Component;
  let fixture: ComponentFixture<Lib5Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
