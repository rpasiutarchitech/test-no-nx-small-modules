import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Container1Component } from './lib7-container1.component';

describe('Lib7Container1Component', () => {
  let component: Lib7Container1Component;
  let fixture: ComponentFixture<Lib7Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
