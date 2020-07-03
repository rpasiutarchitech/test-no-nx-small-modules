import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container8Component } from './lib23-container8.component';

describe('Lib23Container8Component', () => {
  let component: Lib23Container8Component;
  let fixture: ComponentFixture<Lib23Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
