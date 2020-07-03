import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container3Component } from './lib15-container3.component';

describe('Lib15Container3Component', () => {
  let component: Lib15Container3Component;
  let fixture: ComponentFixture<Lib15Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
