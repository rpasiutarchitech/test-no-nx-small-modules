import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container6Component } from './lib3-container6.component';

describe('Lib3Container6Component', () => {
  let component: Lib3Container6Component;
  let fixture: ComponentFixture<Lib3Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
