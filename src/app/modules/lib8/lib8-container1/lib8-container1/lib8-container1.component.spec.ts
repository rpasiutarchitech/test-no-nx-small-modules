import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container1Component } from './lib8-container1.component';

describe('Lib8Container1Component', () => {
  let component: Lib8Container1Component;
  let fixture: ComponentFixture<Lib8Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
