import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container9Component } from './lib24-container9.component';

describe('Lib24Container9Component', () => {
  let component: Lib24Container9Component;
  let fixture: ComponentFixture<Lib24Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
