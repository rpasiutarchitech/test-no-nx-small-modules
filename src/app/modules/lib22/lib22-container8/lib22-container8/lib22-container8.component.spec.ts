import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container8Component } from './lib22-container8.component';

describe('Lib22Container8Component', () => {
  let component: Lib22Container8Component;
  let fixture: ComponentFixture<Lib22Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
