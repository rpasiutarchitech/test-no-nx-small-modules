import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container10Component } from './lib16-container10.component';

describe('Lib16Container10Component', () => {
  let component: Lib16Container10Component;
  let fixture: ComponentFixture<Lib16Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
