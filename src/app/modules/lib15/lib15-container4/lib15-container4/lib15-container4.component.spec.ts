import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container4Component } from './lib15-container4.component';

describe('Lib15Container4Component', () => {
  let component: Lib15Container4Component;
  let fixture: ComponentFixture<Lib15Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
