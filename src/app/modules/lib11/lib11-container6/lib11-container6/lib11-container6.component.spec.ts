import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container6Component } from './lib11-container6.component';

describe('Lib11Container6Component', () => {
  let component: Lib11Container6Component;
  let fixture: ComponentFixture<Lib11Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
