import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container6Component } from './lib25-container6.component';

describe('Lib25Container6Component', () => {
  let component: Lib25Container6Component;
  let fixture: ComponentFixture<Lib25Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
