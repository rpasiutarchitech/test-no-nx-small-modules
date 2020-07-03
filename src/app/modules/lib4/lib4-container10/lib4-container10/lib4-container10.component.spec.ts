import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container10Component } from './lib4-container10.component';

describe('Lib4Container10Component', () => {
  let component: Lib4Container10Component;
  let fixture: ComponentFixture<Lib4Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
