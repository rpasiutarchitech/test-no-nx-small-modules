import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Container6Component } from './lib7-container6.component';

describe('Lib7Container6Component', () => {
  let component: Lib7Container6Component;
  let fixture: ComponentFixture<Lib7Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
