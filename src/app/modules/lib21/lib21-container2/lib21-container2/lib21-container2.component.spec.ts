import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container2Component } from './lib21-container2.component';

describe('Lib21Container2Component', () => {
  let component: Lib21Container2Component;
  let fixture: ComponentFixture<Lib21Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
