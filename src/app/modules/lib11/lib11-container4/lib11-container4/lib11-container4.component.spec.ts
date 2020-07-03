import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container4Component } from './lib11-container4.component';

describe('Lib11Container4Component', () => {
  let component: Lib11Container4Component;
  let fixture: ComponentFixture<Lib11Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
