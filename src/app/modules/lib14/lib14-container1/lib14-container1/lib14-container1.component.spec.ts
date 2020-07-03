import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container1Component } from './lib14-container1.component';

describe('Lib14Container1Component', () => {
  let component: Lib14Container1Component;
  let fixture: ComponentFixture<Lib14Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
