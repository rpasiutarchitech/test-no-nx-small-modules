import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container8Component } from './lib15-container8.component';

describe('Lib15Container8Component', () => {
  let component: Lib15Container8Component;
  let fixture: ComponentFixture<Lib15Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
