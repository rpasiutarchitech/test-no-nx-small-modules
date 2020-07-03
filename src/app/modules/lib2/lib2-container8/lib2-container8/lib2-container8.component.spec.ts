import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container8Component } from './lib2-container8.component';

describe('Lib2Container8Component', () => {
  let component: Lib2Container8Component;
  let fixture: ComponentFixture<Lib2Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
