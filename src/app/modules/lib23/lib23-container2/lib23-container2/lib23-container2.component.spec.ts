import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container2Component } from './lib23-container2.component';

describe('Lib23Container2Component', () => {
  let component: Lib23Container2Component;
  let fixture: ComponentFixture<Lib23Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
