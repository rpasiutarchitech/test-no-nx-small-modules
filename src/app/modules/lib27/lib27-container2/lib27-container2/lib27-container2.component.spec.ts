import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container2Component } from './lib27-container2.component';

describe('Lib27Container2Component', () => {
  let component: Lib27Container2Component;
  let fixture: ComponentFixture<Lib27Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
