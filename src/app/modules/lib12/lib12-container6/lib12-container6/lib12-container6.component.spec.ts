import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container6Component } from './lib12-container6.component';

describe('Lib12Container6Component', () => {
  let component: Lib12Container6Component;
  let fixture: ComponentFixture<Lib12Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
