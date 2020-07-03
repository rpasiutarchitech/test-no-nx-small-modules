import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11SharedComponent1Component } from './lib11-shared-component1.component';

describe('Lib11SharedComponent1Component', () => {
  let component: Lib11SharedComponent1Component;
  let fixture: ComponentFixture<Lib11SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
