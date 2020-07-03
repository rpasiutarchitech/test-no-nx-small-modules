import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28SharedComponent1Component } from './lib28-shared-component1.component';

describe('Lib28SharedComponent1Component', () => {
  let component: Lib28SharedComponent1Component;
  let fixture: ComponentFixture<Lib28SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
