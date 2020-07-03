import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container4Component } from './lib26-container4.component';

describe('Lib26Container4Component', () => {
  let component: Lib26Container4Component;
  let fixture: ComponentFixture<Lib26Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
