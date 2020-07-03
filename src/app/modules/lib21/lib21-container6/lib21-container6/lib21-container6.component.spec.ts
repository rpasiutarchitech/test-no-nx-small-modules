import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container6Component } from './lib21-container6.component';

describe('Lib21Container6Component', () => {
  let component: Lib21Container6Component;
  let fixture: ComponentFixture<Lib21Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
