import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container3Component } from './lib11-container3.component';

describe('Lib11Container3Component', () => {
  let component: Lib11Container3Component;
  let fixture: ComponentFixture<Lib11Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
