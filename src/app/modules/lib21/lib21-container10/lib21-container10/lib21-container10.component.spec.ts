import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container10Component } from './lib21-container10.component';

describe('Lib21Container10Component', () => {
  let component: Lib21Container10Component;
  let fixture: ComponentFixture<Lib21Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
