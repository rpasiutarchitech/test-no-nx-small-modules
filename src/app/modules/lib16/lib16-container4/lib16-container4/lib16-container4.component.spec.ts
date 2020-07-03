import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container4Component } from './lib16-container4.component';

describe('Lib16Container4Component', () => {
  let component: Lib16Container4Component;
  let fixture: ComponentFixture<Lib16Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
