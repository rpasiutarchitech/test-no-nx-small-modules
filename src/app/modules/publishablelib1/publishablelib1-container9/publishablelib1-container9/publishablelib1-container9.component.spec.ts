import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1Container9Component } from './publishablelib1-container9.component';

describe('Publishablelib1Container9Component', () => {
  let component: Publishablelib1Container9Component;
  let fixture: ComponentFixture<Publishablelib1Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
