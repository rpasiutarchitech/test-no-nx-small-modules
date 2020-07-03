import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19SharedComponent1Component } from './lib19-shared-component1.component';

describe('Lib19SharedComponent1Component', () => {
  let component: Lib19SharedComponent1Component;
  let fixture: ComponentFixture<Lib19SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
