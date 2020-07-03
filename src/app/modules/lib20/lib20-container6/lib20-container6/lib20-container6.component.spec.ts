import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container6Component } from './lib20-container6.component';

describe('Lib20Container6Component', () => {
  let component: Lib20Container6Component;
  let fixture: ComponentFixture<Lib20Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
