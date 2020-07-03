import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container4Component } from './lib30-container4.component';

describe('Lib30Container4Component', () => {
  let component: Lib30Container4Component;
  let fixture: ComponentFixture<Lib30Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
