import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container6Component } from './lib15-container6.component';

describe('Lib15Container6Component', () => {
  let component: Lib15Container6Component;
  let fixture: ComponentFixture<Lib15Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
