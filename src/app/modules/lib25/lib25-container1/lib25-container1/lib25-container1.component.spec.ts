import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container1Component } from './lib25-container1.component';

describe('Lib25Container1Component', () => {
  let component: Lib25Container1Component;
  let fixture: ComponentFixture<Lib25Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
