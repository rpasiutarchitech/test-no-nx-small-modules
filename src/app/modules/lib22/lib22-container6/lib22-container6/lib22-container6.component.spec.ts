import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container6Component } from './lib22-container6.component';

describe('Lib22Container6Component', () => {
  let component: Lib22Container6Component;
  let fixture: ComponentFixture<Lib22Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
