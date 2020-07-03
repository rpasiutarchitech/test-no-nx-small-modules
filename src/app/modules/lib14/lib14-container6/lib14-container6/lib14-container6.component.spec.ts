import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container6Component } from './lib14-container6.component';

describe('Lib14Container6Component', () => {
  let component: Lib14Container6Component;
  let fixture: ComponentFixture<Lib14Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
