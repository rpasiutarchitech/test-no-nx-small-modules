import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container2Component } from './lib15-container2.component';

describe('Lib15Container2Component', () => {
  let component: Lib15Container2Component;
  let fixture: ComponentFixture<Lib15Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
