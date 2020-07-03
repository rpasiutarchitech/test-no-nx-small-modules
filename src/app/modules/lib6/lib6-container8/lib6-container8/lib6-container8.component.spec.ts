import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container8Component } from './lib6-container8.component';

describe('Lib6Container8Component', () => {
  let component: Lib6Container8Component;
  let fixture: ComponentFixture<Lib6Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
