import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container10Component } from './lib30-container10.component';

describe('Lib30Container10Component', () => {
  let component: Lib30Container10Component;
  let fixture: ComponentFixture<Lib30Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
