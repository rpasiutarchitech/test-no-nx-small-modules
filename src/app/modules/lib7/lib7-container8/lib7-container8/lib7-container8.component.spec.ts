import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Container8Component } from './lib7-container8.component';

describe('Lib7Container8Component', () => {
  let component: Lib7Container8Component;
  let fixture: ComponentFixture<Lib7Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
