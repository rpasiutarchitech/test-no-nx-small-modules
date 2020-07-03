import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23SharedComponent1Component } from './lib23-shared-component1.component';

describe('Lib23SharedComponent1Component', () => {
  let component: Lib23SharedComponent1Component;
  let fixture: ComponentFixture<Lib23SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
