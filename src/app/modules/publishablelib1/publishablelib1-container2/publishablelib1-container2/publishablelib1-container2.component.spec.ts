import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container2Component } from './publishablelib1-container2.component';

describe('Publishablelib1Container2Component', () => {
  let component: Publishablelib1Container2Component;
  let fixture: ComponentFixture<Publishablelib1Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
