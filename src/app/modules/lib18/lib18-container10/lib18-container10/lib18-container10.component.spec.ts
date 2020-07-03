import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container10Component } from './lib18-container10.component';

describe('Lib18Container10Component', () => {
  let component: Lib18Container10Component;
  let fixture: ComponentFixture<Lib18Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
