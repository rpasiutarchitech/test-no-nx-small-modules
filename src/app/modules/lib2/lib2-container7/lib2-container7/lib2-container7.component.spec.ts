import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container7Component } from './lib2-container7.component';

describe('Lib2Container7Component', () => {
  let component: Lib2Container7Component;
  let fixture: ComponentFixture<Lib2Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
