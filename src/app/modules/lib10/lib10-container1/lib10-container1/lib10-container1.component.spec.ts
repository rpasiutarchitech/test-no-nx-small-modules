import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container1Component } from './lib10-container1.component';

describe('Lib10Container1Component', () => {
  let component: Lib10Container1Component;
  let fixture: ComponentFixture<Lib10Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
