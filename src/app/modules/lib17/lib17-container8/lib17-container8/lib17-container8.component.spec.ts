import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container8Component } from './lib17-container8.component';

describe('Lib17Container8Component', () => {
  let component: Lib17Container8Component;
  let fixture: ComponentFixture<Lib17Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
