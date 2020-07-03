import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container1Component } from './lib11-container1.component';

describe('Lib11Container1Component', () => {
  let component: Lib11Container1Component;
  let fixture: ComponentFixture<Lib11Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
