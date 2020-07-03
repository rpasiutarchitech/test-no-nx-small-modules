import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container7Component } from './lib22-container7.component';

describe('Lib22Container7Component', () => {
  let component: Lib22Container7Component;
  let fixture: ComponentFixture<Lib22Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
