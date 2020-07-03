import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container6Component } from './lib18-container6.component';

describe('Lib18Container6Component', () => {
  let component: Lib18Container6Component;
  let fixture: ComponentFixture<Lib18Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
