import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container3Component } from './lib24-container3.component';

describe('Lib24Container3Component', () => {
  let component: Lib24Container3Component;
  let fixture: ComponentFixture<Lib24Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
