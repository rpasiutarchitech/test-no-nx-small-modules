import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container8Component } from './lib11-container8.component';

describe('Lib11Container8Component', () => {
  let component: Lib11Container8Component;
  let fixture: ComponentFixture<Lib11Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
