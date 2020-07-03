import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container1Component } from './lib20-container1.component';

describe('Lib20Container1Component', () => {
  let component: Lib20Container1Component;
  let fixture: ComponentFixture<Lib20Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
