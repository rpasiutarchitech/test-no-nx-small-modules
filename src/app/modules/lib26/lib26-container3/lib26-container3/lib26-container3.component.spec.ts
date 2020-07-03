import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container3Component } from './lib26-container3.component';

describe('Lib26Container3Component', () => {
  let component: Lib26Container3Component;
  let fixture: ComponentFixture<Lib26Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
