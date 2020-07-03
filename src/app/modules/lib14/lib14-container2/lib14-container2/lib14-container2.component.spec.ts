import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container2Component } from './lib14-container2.component';

describe('Lib14Container2Component', () => {
  let component: Lib14Container2Component;
  let fixture: ComponentFixture<Lib14Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
