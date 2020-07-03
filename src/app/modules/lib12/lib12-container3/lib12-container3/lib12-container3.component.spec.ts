import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container3Component } from './lib12-container3.component';

describe('Lib12Container3Component', () => {
  let component: Lib12Container3Component;
  let fixture: ComponentFixture<Lib12Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
