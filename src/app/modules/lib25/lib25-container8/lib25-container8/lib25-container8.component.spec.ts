import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container8Component } from './lib25-container8.component';

describe('Lib25Container8Component', () => {
  let component: Lib25Container8Component;
  let fixture: ComponentFixture<Lib25Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
