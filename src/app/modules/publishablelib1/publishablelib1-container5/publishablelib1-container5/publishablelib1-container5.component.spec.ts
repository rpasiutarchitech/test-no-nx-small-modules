import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container5Component } from './publishablelib1-container5.component';

describe('Publishablelib1Container5Component', () => {
  let component: Publishablelib1Container5Component;
  let fixture: ComponentFixture<Publishablelib1Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
