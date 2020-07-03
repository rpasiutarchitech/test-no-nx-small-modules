import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container1Component } from './lib12-container1.component';

describe('Lib12Container1Component', () => {
  let component: Lib12Container1Component;
  let fixture: ComponentFixture<Lib12Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
