import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container7Component } from './lib10-container7.component';

describe('Lib10Container7Component', () => {
  let component: Lib10Container7Component;
  let fixture: ComponentFixture<Lib10Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
