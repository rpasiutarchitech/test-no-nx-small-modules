import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container6Component } from './publishablelib1-container6.component';

describe('Publishablelib1Container6Component', () => {
  let component: Publishablelib1Container6Component;
  let fixture: ComponentFixture<Publishablelib1Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
