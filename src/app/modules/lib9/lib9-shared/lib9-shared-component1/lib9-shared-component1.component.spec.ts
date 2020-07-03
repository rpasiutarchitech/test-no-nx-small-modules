import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9SharedComponent1Component } from './lib9-shared-component1.component';

describe('Lib9SharedComponent1Component', () => {
  let component: Lib9SharedComponent1Component;
  let fixture: ComponentFixture<Lib9SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
