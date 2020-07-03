import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container8Component } from './lib4-container8.component';

describe('Lib4Container8Component', () => {
  let component: Lib4Container8Component;
  let fixture: ComponentFixture<Lib4Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
