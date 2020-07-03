import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1SharedComponent1Component } from './publishablelib1-shared-component1.component';

describe('Publishablelib1SharedComponent1Component', () => {
  let component: Publishablelib1SharedComponent1Component;
  let fixture: ComponentFixture<Publishablelib1SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
