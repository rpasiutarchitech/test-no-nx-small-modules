import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container7Component } from './lib9-container7.component';

describe('Lib9Container7Component', () => {
  let component: Lib9Container7Component;
  let fixture: ComponentFixture<Lib9Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
