import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container10Component } from './publishablelib1-container10.component';

describe('Publishablelib1Container10Component', () => {
  let component: Publishablelib1Container10Component;
  let fixture: ComponentFixture<Publishablelib1Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
