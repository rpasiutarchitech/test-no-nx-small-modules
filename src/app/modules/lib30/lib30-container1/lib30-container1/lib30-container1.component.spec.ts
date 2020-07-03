import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container1Component } from './lib30-container1.component';

describe('Lib30Container1Component', () => {
  let component: Lib30Container1Component;
  let fixture: ComponentFixture<Lib30Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
