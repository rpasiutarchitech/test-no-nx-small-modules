import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container8Component } from './lib13-container8.component';

describe('Lib13Container8Component', () => {
  let component: Lib13Container8Component;
  let fixture: ComponentFixture<Lib13Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
