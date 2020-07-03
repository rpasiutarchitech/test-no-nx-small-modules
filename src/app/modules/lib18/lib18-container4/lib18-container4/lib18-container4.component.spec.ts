import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container4Component } from './lib18-container4.component';

describe('Lib18Container4Component', () => {
  let component: Lib18Container4Component;
  let fixture: ComponentFixture<Lib18Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
