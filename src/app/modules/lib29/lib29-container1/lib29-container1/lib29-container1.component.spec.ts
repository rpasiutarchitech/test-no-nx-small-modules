import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container1Component } from './lib29-container1.component';

describe('Lib29Container1Component', () => {
  let component: Lib29Container1Component;
  let fixture: ComponentFixture<Lib29Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
