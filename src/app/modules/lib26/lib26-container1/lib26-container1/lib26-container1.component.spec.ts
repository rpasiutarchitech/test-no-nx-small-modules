import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container1Component } from './lib26-container1.component';

describe('Lib26Container1Component', () => {
  let component: Lib26Container1Component;
  let fixture: ComponentFixture<Lib26Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
