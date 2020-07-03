import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container6Component } from './lib23-container6.component';

describe('Lib23Container6Component', () => {
  let component: Lib23Container6Component;
  let fixture: ComponentFixture<Lib23Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
