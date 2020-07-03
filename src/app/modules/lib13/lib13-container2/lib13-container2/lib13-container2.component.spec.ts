import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container2Component } from './lib13-container2.component';

describe('Lib13Container2Component', () => {
  let component: Lib13Container2Component;
  let fixture: ComponentFixture<Lib13Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
