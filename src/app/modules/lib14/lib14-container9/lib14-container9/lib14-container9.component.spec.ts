import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container9Component } from './lib14-container9.component';

describe('Lib14Container9Component', () => {
  let component: Lib14Container9Component;
  let fixture: ComponentFixture<Lib14Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
