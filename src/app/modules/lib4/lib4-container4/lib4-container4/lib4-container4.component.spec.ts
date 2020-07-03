import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container4Component } from './lib4-container4.component';

describe('Lib4Container4Component', () => {
  let component: Lib4Container4Component;
  let fixture: ComponentFixture<Lib4Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
