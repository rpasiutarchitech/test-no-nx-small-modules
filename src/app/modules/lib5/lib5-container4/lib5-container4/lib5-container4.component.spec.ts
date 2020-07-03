import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container4Component } from './lib5-container4.component';

describe('Lib5Container4Component', () => {
  let component: Lib5Container4Component;
  let fixture: ComponentFixture<Lib5Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
