import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container8Component } from './lib20-container8.component';

describe('Lib20Container8Component', () => {
  let component: Lib20Container8Component;
  let fixture: ComponentFixture<Lib20Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
