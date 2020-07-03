import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container2Component } from './lib11-container2.component';

describe('Lib11Container2Component', () => {
  let component: Lib11Container2Component;
  let fixture: ComponentFixture<Lib11Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
