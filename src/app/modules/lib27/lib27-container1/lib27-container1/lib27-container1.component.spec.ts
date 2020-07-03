import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container1Component } from './lib27-container1.component';

describe('Lib27Container1Component', () => {
  let component: Lib27Container1Component;
  let fixture: ComponentFixture<Lib27Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
