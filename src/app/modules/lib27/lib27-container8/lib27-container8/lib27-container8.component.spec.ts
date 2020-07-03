import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container8Component } from './lib27-container8.component';

describe('Lib27Container8Component', () => {
  let component: Lib27Container8Component;
  let fixture: ComponentFixture<Lib27Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
