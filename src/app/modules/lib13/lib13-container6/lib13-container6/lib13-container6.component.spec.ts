import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container6Component } from './lib13-container6.component';

describe('Lib13Container6Component', () => {
  let component: Lib13Container6Component;
  let fixture: ComponentFixture<Lib13Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
