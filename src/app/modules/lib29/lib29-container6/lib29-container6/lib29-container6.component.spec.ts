import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container6Component } from './lib29-container6.component';

describe('Lib29Container6Component', () => {
  let component: Lib29Container6Component;
  let fixture: ComponentFixture<Lib29Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
