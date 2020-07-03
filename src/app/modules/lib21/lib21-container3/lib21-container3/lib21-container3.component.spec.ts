import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container3Component } from './lib21-container3.component';

describe('Lib21Container3Component', () => {
  let component: Lib21Container3Component;
  let fixture: ComponentFixture<Lib21Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
