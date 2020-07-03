import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container10Component } from './lib13-container10.component';

describe('Lib13Container10Component', () => {
  let component: Lib13Container10Component;
  let fixture: ComponentFixture<Lib13Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
