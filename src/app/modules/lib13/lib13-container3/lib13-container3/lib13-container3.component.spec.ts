import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container3Component } from './lib13-container3.component';

describe('Lib13Container3Component', () => {
  let component: Lib13Container3Component;
  let fixture: ComponentFixture<Lib13Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
