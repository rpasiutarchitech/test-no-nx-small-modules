import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container2Component } from './lib12-container2.component';

describe('Lib12Container2Component', () => {
  let component: Lib12Container2Component;
  let fixture: ComponentFixture<Lib12Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
