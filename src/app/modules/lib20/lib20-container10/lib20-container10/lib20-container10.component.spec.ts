import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container10Component } from './lib20-container10.component';

describe('Lib20Container10Component', () => {
  let component: Lib20Container10Component;
  let fixture: ComponentFixture<Lib20Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
