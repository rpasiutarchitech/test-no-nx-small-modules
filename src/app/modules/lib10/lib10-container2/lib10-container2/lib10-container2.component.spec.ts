import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container2Component } from './lib10-container2.component';

describe('Lib10Container2Component', () => {
  let component: Lib10Container2Component;
  let fixture: ComponentFixture<Lib10Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
