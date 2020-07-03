import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container1Component } from './publishablelib1-container1.component';

describe('Publishablelib1Container1Component', () => {
  let component: Publishablelib1Container1Component;
  let fixture: ComponentFixture<Publishablelib1Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
