import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container2Component } from './lib5-container2.component';

describe('Lib5Container2Component', () => {
  let component: Lib5Container2Component;
  let fixture: ComponentFixture<Lib5Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
