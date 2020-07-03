import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container10Component } from './lib5-container10.component';

describe('Lib5Container10Component', () => {
  let component: Lib5Container10Component;
  let fixture: ComponentFixture<Lib5Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
