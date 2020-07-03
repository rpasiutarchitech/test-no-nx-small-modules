import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container1Component } from './lib23-container1.component';

describe('Lib23Container1Component', () => {
  let component: Lib23Container1Component;
  let fixture: ComponentFixture<Lib23Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
