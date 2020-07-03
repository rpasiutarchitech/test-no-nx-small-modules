import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container7Component } from './lib17-container7.component';

describe('Lib17Container7Component', () => {
  let component: Lib17Container7Component;
  let fixture: ComponentFixture<Lib17Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
