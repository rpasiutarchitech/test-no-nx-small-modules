import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container3Component } from './lib23-container3.component';

describe('Lib23Container3Component', () => {
  let component: Lib23Container3Component;
  let fixture: ComponentFixture<Lib23Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
