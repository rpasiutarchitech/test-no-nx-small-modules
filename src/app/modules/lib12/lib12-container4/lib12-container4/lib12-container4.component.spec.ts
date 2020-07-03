import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container4Component } from './lib12-container4.component';

describe('Lib12Container4Component', () => {
  let component: Lib12Container4Component;
  let fixture: ComponentFixture<Lib12Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
