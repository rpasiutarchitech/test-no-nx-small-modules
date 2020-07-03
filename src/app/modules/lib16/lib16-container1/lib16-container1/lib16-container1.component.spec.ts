import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container1Component } from './lib16-container1.component';

describe('Lib16Container1Component', () => {
  let component: Lib16Container1Component;
  let fixture: ComponentFixture<Lib16Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
