import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container6Component } from './lib26-container6.component';

describe('Lib26Container6Component', () => {
  let component: Lib26Container6Component;
  let fixture: ComponentFixture<Lib26Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
