import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container4Component } from './lib8-container4.component';

describe('Lib8Container4Component', () => {
  let component: Lib8Container4Component;
  let fixture: ComponentFixture<Lib8Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
