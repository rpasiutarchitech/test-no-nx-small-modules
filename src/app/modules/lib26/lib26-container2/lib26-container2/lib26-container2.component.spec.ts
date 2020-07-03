import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container2Component } from './lib26-container2.component';

describe('Lib26Container2Component', () => {
  let component: Lib26Container2Component;
  let fixture: ComponentFixture<Lib26Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
