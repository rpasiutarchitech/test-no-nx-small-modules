import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container7Component } from './lib6-container7.component';

describe('Lib6Container7Component', () => {
  let component: Lib6Container7Component;
  let fixture: ComponentFixture<Lib6Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
