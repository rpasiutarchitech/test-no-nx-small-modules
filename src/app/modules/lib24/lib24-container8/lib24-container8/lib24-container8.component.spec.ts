import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container8Component } from './lib24-container8.component';

describe('Lib24Container8Component', () => {
  let component: Lib24Container8Component;
  let fixture: ComponentFixture<Lib24Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
