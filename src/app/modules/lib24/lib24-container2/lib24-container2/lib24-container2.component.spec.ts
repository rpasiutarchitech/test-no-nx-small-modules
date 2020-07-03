import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container2Component } from './lib24-container2.component';

describe('Lib24Container2Component', () => {
  let component: Lib24Container2Component;
  let fixture: ComponentFixture<Lib24Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
