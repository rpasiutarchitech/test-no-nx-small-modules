import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container2Component } from './lib2-container2.component';

describe('Lib2Container2Component', () => {
  let component: Lib2Container2Component;
  let fixture: ComponentFixture<Lib2Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
