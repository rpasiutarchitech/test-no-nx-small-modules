import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container8Component } from './lib29-container8.component';

describe('Lib29Container8Component', () => {
  let component: Lib29Container8Component;
  let fixture: ComponentFixture<Lib29Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
