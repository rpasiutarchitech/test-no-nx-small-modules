import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container2Component } from './lib18-container2.component';

describe('Lib18Container2Component', () => {
  let component: Lib18Container2Component;
  let fixture: ComponentFixture<Lib18Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
