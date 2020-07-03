import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container10Component } from './lib12-container10.component';

describe('Lib12Container10Component', () => {
  let component: Lib12Container10Component;
  let fixture: ComponentFixture<Lib12Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
