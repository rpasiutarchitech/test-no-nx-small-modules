import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container6Component } from './lib8-container6.component';

describe('Lib8Container6Component', () => {
  let component: Lib8Container6Component;
  let fixture: ComponentFixture<Lib8Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
