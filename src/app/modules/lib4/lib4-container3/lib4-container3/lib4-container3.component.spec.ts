import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container3Component } from './lib4-container3.component';

describe('Lib4Container3Component', () => {
  let component: Lib4Container3Component;
  let fixture: ComponentFixture<Lib4Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
