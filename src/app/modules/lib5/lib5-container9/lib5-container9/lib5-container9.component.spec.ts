import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container9Component } from './lib5-container9.component';

describe('Lib5Container9Component', () => {
  let component: Lib5Container9Component;
  let fixture: ComponentFixture<Lib5Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
