import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container7Component } from './lib25-container7.component';

describe('Lib25Container7Component', () => {
  let component: Lib25Container7Component;
  let fixture: ComponentFixture<Lib25Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
