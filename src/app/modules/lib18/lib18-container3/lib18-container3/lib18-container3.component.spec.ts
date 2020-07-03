import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container3Component } from './lib18-container3.component';

describe('Lib18Container3Component', () => {
  let component: Lib18Container3Component;
  let fixture: ComponentFixture<Lib18Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
