import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container9Component } from './lib8-container9.component';

describe('Lib8Container9Component', () => {
  let component: Lib8Container9Component;
  let fixture: ComponentFixture<Lib8Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
