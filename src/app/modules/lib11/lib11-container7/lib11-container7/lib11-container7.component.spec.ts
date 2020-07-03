import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container7Component } from './lib11-container7.component';

describe('Lib11Container7Component', () => {
  let component: Lib11Container7Component;
  let fixture: ComponentFixture<Lib11Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
