import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container1Component } from './lib13-container1.component';

describe('Lib13Container1Component', () => {
  let component: Lib13Container1Component;
  let fixture: ComponentFixture<Lib13Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
