import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container1Component } from './lib24-container1.component';

describe('Lib24Container1Component', () => {
  let component: Lib24Container1Component;
  let fixture: ComponentFixture<Lib24Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
