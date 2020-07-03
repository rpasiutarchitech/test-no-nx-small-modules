import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container4Component } from './lib24-container4.component';

describe('Lib24Container4Component', () => {
  let component: Lib24Container4Component;
  let fixture: ComponentFixture<Lib24Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
