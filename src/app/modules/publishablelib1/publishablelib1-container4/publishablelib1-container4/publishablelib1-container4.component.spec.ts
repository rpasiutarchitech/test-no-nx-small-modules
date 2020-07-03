import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container4Component } from './publishablelib1-container4.component';

describe('Publishablelib1Container4Component', () => {
  let component: Publishablelib1Container4Component;
  let fixture: ComponentFixture<Publishablelib1Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
