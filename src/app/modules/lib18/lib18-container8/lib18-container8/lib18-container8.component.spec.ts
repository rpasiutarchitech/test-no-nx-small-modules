import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container8Component } from './lib18-container8.component';

describe('Lib18Container8Component', () => {
  let component: Lib18Container8Component;
  let fixture: ComponentFixture<Lib18Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
