import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container3Component } from './lib5-container3.component';

describe('Lib5Container3Component', () => {
  let component: Lib5Container3Component;
  let fixture: ComponentFixture<Lib5Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
