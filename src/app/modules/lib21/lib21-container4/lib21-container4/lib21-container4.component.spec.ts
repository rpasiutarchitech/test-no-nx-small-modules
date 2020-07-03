import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container4Component } from './lib21-container4.component';

describe('Lib21Container4Component', () => {
  let component: Lib21Container4Component;
  let fixture: ComponentFixture<Lib21Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
