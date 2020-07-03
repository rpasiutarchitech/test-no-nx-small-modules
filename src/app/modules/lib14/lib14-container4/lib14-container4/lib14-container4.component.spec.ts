import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container4Component } from './lib14-container4.component';

describe('Lib14Container4Component', () => {
  let component: Lib14Container4Component;
  let fixture: ComponentFixture<Lib14Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
