import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container1Component } from './lib4-container1.component';

describe('Lib4Container1Component', () => {
  let component: Lib4Container1Component;
  let fixture: ComponentFixture<Lib4Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
