import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container6Component } from './lib2-container6.component';

describe('Lib2Container6Component', () => {
  let component: Lib2Container6Component;
  let fixture: ComponentFixture<Lib2Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
