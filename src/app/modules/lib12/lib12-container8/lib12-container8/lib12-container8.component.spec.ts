import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container8Component } from './lib12-container8.component';

describe('Lib12Container8Component', () => {
  let component: Lib12Container8Component;
  let fixture: ComponentFixture<Lib12Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
