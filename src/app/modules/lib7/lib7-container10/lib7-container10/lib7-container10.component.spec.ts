import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Container10Component } from './lib7-container10.component';

describe('Lib7Container10Component', () => {
  let component: Lib7Container10Component;
  let fixture: ComponentFixture<Lib7Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
