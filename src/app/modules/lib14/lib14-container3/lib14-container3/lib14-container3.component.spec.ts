import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container3Component } from './lib14-container3.component';

describe('Lib14Container3Component', () => {
  let component: Lib14Container3Component;
  let fixture: ComponentFixture<Lib14Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
