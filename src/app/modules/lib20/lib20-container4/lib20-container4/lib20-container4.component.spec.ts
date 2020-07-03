import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container4Component } from './lib20-container4.component';

describe('Lib20Container4Component', () => {
  let component: Lib20Container4Component;
  let fixture: ComponentFixture<Lib20Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
