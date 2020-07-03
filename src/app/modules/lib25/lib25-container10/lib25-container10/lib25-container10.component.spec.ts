import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container10Component } from './lib25-container10.component';

describe('Lib25Container10Component', () => {
  let component: Lib25Container10Component;
  let fixture: ComponentFixture<Lib25Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
