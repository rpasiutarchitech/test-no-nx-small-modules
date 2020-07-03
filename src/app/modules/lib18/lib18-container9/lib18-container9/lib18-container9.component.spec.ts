import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container9Component } from './lib18-container9.component';

describe('Lib18Container9Component', () => {
  let component: Lib18Container9Component;
  let fixture: ComponentFixture<Lib18Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
