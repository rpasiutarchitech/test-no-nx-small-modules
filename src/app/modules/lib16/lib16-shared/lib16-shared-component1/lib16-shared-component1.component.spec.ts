import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16SharedComponent1Component } from './lib16-shared-component1.component';

describe('Lib16SharedComponent1Component', () => {
  let component: Lib16SharedComponent1Component;
  let fixture: ComponentFixture<Lib16SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
