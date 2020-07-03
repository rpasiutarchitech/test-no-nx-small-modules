import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container9Component } from './lib12-container9.component';

describe('Lib12Container9Component', () => {
  let component: Lib12Container9Component;
  let fixture: ComponentFixture<Lib12Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
