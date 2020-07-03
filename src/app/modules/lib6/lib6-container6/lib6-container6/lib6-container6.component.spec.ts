import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container6Component } from './lib6-container6.component';

describe('Lib6Container6Component', () => {
  let component: Lib6Container6Component;
  let fixture: ComponentFixture<Lib6Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
