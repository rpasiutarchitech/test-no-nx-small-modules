import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17SharedComponent1Component } from './lib17-shared-component1.component';

describe('Lib17SharedComponent1Component', () => {
  let component: Lib17SharedComponent1Component;
  let fixture: ComponentFixture<Lib17SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
