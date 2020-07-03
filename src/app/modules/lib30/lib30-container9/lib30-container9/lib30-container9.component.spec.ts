import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container9Component } from './lib30-container9.component';

describe('Lib30Container9Component', () => {
  let component: Lib30Container9Component;
  let fixture: ComponentFixture<Lib30Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
