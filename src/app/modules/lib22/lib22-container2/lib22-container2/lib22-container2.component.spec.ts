import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container2Component } from './lib22-container2.component';

describe('Lib22Container2Component', () => {
  let component: Lib22Container2Component;
  let fixture: ComponentFixture<Lib22Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
