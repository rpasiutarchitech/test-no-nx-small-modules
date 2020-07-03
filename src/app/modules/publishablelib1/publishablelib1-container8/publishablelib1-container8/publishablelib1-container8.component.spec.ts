import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container8Component } from './publishablelib1-container8.component';

describe('Publishablelib1Container8Component', () => {
  let component: Publishablelib1Container8Component;
  let fixture: ComponentFixture<Publishablelib1Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
