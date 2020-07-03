import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container8Component } from './lib30-container8.component';

describe('Lib30Container8Component', () => {
  let component: Lib30Container8Component;
  let fixture: ComponentFixture<Lib30Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
