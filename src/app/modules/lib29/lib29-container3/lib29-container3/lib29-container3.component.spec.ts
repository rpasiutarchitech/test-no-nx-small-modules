import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container3Component } from './lib29-container3.component';

describe('Lib29Container3Component', () => {
  let component: Lib29Container3Component;
  let fixture: ComponentFixture<Lib29Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
