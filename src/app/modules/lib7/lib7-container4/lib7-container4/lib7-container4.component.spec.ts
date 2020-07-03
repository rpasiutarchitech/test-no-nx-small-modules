import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Container4Component } from './lib7-container4.component';

describe('Lib7Container4Component', () => {
  let component: Lib7Container4Component;
  let fixture: ComponentFixture<Lib7Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
