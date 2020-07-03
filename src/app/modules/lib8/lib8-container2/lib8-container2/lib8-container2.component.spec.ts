import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container2Component } from './lib8-container2.component';

describe('Lib8Container2Component', () => {
  let component: Lib8Container2Component;
  let fixture: ComponentFixture<Lib8Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
