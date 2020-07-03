import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container8Component } from './lib5-container8.component';

describe('Lib5Container8Component', () => {
  let component: Lib5Container8Component;
  let fixture: ComponentFixture<Lib5Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
