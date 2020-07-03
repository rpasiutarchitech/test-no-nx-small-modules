import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container10Component } from './lib11-container10.component';

describe('Lib11Container10Component', () => {
  let component: Lib11Container10Component;
  let fixture: ComponentFixture<Lib11Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
