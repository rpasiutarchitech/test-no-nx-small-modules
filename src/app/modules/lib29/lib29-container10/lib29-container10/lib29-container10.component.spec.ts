import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container10Component } from './lib29-container10.component';

describe('Lib29Container10Component', () => {
  let component: Lib29Container10Component;
  let fixture: ComponentFixture<Lib29Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
