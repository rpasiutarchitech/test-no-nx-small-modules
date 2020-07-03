import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container10Component } from './lib15-container10.component';

describe('Lib15Container10Component', () => {
  let component: Lib15Container10Component;
  let fixture: ComponentFixture<Lib15Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
