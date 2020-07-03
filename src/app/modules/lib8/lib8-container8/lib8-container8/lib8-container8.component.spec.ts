import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container8Component } from './lib8-container8.component';

describe('Lib8Container8Component', () => {
  let component: Lib8Container8Component;
  let fixture: ComponentFixture<Lib8Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
