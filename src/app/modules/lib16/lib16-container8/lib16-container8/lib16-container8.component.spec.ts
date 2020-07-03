import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container8Component } from './lib16-container8.component';

describe('Lib16Container8Component', () => {
  let component: Lib16Container8Component;
  let fixture: ComponentFixture<Lib16Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
