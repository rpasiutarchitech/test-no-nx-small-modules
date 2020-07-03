import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container4Component } from './lib29-container4.component';

describe('Lib29Container4Component', () => {
  let component: Lib29Container4Component;
  let fixture: ComponentFixture<Lib29Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
