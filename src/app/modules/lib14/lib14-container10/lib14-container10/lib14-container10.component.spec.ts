import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container10Component } from './lib14-container10.component';

describe('Lib14Container10Component', () => {
  let component: Lib14Container10Component;
  let fixture: ComponentFixture<Lib14Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
