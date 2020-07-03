import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container3Component } from './publishablelib1-container3.component';

describe('Publishablelib1Container3Component', () => {
  let component: Publishablelib1Container3Component;
  let fixture: ComponentFixture<Publishablelib1Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
