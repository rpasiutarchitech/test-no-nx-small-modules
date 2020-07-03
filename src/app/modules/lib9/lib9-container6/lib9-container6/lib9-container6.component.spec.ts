import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container6Component } from './lib9-container6.component';

describe('Lib9Container6Component', () => {
  let component: Lib9Container6Component;
  let fixture: ComponentFixture<Lib9Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
