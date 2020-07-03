import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24SharedComponent1Component } from './lib24-shared-component1.component';

describe('Lib24SharedComponent1Component', () => {
  let component: Lib24SharedComponent1Component;
  let fixture: ComponentFixture<Lib24SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
