import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container7Component } from './publishablelib1-container7.component';

describe('Publishablelib1Container7Component', () => {
  let component: Publishablelib1Container7Component;
  let fixture: ComponentFixture<Publishablelib1Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
