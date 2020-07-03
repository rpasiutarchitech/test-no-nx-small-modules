import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container10Component } from './lib8-container10.component';

describe('Lib8Container10Component', () => {
  let component: Lib8Container10Component;
  let fixture: ComponentFixture<Lib8Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
