import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3SharedComponent1Component } from './lib3-shared-component1.component';

describe('Lib3SharedComponent1Component', () => {
  let component: Lib3SharedComponent1Component;
  let fixture: ComponentFixture<Lib3SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
