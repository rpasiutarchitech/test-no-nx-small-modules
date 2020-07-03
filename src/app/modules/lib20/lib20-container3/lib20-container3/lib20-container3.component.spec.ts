import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container3Component } from './lib20-container3.component';

describe('Lib20Container3Component', () => {
  let component: Lib20Container3Component;
  let fixture: ComponentFixture<Lib20Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
