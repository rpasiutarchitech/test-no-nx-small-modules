import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container10Component } from './lib26-container10.component';

describe('Lib26Container10Component', () => {
  let component: Lib26Container10Component;
  let fixture: ComponentFixture<Lib26Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
