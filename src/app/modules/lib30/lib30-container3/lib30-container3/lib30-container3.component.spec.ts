import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container3Component } from './lib30-container3.component';

describe('Lib30Container3Component', () => {
  let component: Lib30Container3Component;
  let fixture: ComponentFixture<Lib30Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
