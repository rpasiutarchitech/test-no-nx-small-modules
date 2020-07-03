import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container1Component } from './lib5-container1.component';

describe('Lib5Container1Component', () => {
  let component: Lib5Container1Component;
  let fixture: ComponentFixture<Lib5Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
