import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Container9Component } from './lib7-container9.component';

describe('Lib7Container9Component', () => {
  let component: Lib7Container9Component;
  let fixture: ComponentFixture<Lib7Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
