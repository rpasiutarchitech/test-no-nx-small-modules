import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container9Component } from './lib29-container9.component';

describe('Lib29Container9Component', () => {
  let component: Lib29Container9Component;
  let fixture: ComponentFixture<Lib29Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
