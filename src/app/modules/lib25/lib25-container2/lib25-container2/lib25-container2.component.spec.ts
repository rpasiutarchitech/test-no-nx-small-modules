import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container2Component } from './lib25-container2.component';

describe('Lib25Container2Component', () => {
  let component: Lib25Container2Component;
  let fixture: ComponentFixture<Lib25Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
