import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6SharedComponent1Component } from './lib6-shared-component1.component';

describe('Lib6SharedComponent1Component', () => {
  let component: Lib6SharedComponent1Component;
  let fixture: ComponentFixture<Lib6SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
