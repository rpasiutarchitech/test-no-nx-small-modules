import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27SharedComponent1Component } from './lib27-shared-component1.component';

describe('Lib27SharedComponent1Component', () => {
  let component: Lib27SharedComponent1Component;
  let fixture: ComponentFixture<Lib27SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
