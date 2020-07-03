import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container6Component } from './lib30-container6.component';

describe('Lib30Container6Component', () => {
  let component: Lib30Container6Component;
  let fixture: ComponentFixture<Lib30Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
