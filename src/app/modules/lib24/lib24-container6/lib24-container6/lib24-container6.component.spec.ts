import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container6Component } from './lib24-container6.component';

describe('Lib24Container6Component', () => {
  let component: Lib24Container6Component;
  let fixture: ComponentFixture<Lib24Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
