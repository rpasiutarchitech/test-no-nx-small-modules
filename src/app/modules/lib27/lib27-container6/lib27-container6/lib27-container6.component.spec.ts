import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container6Component } from './lib27-container6.component';

describe('Lib27Container6Component', () => {
  let component: Lib27Container6Component;
  let fixture: ComponentFixture<Lib27Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
