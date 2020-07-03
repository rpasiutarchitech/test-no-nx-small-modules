import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container4Component } from './lib13-container4.component';

describe('Lib13Container4Component', () => {
  let component: Lib13Container4Component;
  let fixture: ComponentFixture<Lib13Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
