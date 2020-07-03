import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container1Component } from './lib21-container1.component';

describe('Lib21Container1Component', () => {
  let component: Lib21Container1Component;
  let fixture: ComponentFixture<Lib21Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
