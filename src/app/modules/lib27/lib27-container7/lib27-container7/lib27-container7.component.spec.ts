import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container7Component } from './lib27-container7.component';

describe('Lib27Container7Component', () => {
  let component: Lib27Container7Component;
  let fixture: ComponentFixture<Lib27Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
