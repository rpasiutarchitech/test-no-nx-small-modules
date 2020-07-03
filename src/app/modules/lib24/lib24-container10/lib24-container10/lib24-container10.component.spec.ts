import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container10Component } from './lib24-container10.component';

describe('Lib24Container10Component', () => {
  let component: Lib24Container10Component;
  let fixture: ComponentFixture<Lib24Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
