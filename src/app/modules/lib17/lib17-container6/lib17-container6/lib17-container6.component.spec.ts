import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container6Component } from './lib17-container6.component';

describe('Lib17Container6Component', () => {
  let component: Lib17Container6Component;
  let fixture: ComponentFixture<Lib17Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
