import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container1Component } from './lib18-container1.component';

describe('Lib18Container1Component', () => {
  let component: Lib18Container1Component;
  let fixture: ComponentFixture<Lib18Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
