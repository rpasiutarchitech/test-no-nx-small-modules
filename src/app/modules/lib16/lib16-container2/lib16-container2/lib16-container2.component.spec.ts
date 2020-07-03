import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container2Component } from './lib16-container2.component';

describe('Lib16Container2Component', () => {
  let component: Lib16Container2Component;
  let fixture: ComponentFixture<Lib16Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
