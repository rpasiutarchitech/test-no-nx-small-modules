import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container8Component } from './lib14-container8.component';

describe('Lib14Container8Component', () => {
  let component: Lib14Container8Component;
  let fixture: ComponentFixture<Lib14Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
