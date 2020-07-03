import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container6Component } from './lib19-container6.component';

describe('Lib19Container6Component', () => {
  let component: Lib19Container6Component;
  let fixture: ComponentFixture<Lib19Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
