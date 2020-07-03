import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container1Component } from './lib15-container1.component';

describe('Lib15Container1Component', () => {
  let component: Lib15Container1Component;
  let fixture: ComponentFixture<Lib15Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
