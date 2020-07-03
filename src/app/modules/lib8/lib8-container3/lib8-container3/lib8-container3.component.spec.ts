import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container3Component } from './lib8-container3.component';

describe('Lib8Container3Component', () => {
  let component: Lib8Container3Component;
  let fixture: ComponentFixture<Lib8Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
