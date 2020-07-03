import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2SharedComponent1Component } from './lib2-shared-component1.component';

describe('Lib2SharedComponent1Component', () => {
  let component: Lib2SharedComponent1Component;
  let fixture: ComponentFixture<Lib2SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
