import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container8Component } from './lib21-container8.component';

describe('Lib21Container8Component', () => {
  let component: Lib21Container8Component;
  let fixture: ComponentFixture<Lib21Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
