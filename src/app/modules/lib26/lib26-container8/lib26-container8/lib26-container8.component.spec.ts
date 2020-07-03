import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container8Component } from './lib26-container8.component';

describe('Lib26Container8Component', () => {
  let component: Lib26Container8Component;
  let fixture: ComponentFixture<Lib26Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
