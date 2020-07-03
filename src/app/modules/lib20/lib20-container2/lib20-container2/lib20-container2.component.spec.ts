import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container2Component } from './lib20-container2.component';

describe('Lib20Container2Component', () => {
  let component: Lib20Container2Component;
  let fixture: ComponentFixture<Lib20Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
