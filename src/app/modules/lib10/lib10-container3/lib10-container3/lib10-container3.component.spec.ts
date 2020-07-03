import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container3Component } from './lib10-container3.component';

describe('Lib10Container3Component', () => {
  let component: Lib10Container3Component;
  let fixture: ComponentFixture<Lib10Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
