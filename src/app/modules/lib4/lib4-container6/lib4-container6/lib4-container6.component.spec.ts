import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container6Component } from './lib4-container6.component';

describe('Lib4Container6Component', () => {
  let component: Lib4Container6Component;
  let fixture: ComponentFixture<Lib4Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
