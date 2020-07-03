import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container6Component } from './lib16-container6.component';

describe('Lib16Container6Component', () => {
  let component: Lib16Container6Component;
  let fixture: ComponentFixture<Lib16Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
