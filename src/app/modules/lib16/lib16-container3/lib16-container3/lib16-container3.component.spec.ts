import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container3Component } from './lib16-container3.component';

describe('Lib16Container3Component', () => {
  let component: Lib16Container3Component;
  let fixture: ComponentFixture<Lib16Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
