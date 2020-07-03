import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container2Component } from './lib29-container2.component';

describe('Lib29Container2Component', () => {
  let component: Lib29Container2Component;
  let fixture: ComponentFixture<Lib29Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
