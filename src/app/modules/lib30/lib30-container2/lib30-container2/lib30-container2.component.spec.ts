import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30Container2Component } from './lib30-container2.component';

describe('Lib30Container2Component', () => {
  let component: Lib30Container2Component;
  let fixture: ComponentFixture<Lib30Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
