import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container6Component } from './lib10-container6.component';

describe('Lib10Container6Component', () => {
  let component: Lib10Container6Component;
  let fixture: ComponentFixture<Lib10Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
