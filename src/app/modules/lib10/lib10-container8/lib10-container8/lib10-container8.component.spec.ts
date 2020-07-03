import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container8Component } from './lib10-container8.component';

describe('Lib10Container8Component', () => {
  let component: Lib10Container8Component;
  let fixture: ComponentFixture<Lib10Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
