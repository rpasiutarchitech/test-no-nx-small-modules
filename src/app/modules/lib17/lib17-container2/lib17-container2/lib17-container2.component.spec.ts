import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container2Component } from './lib17-container2.component';

describe('Lib17Container2Component', () => {
  let component: Lib17Container2Component;
  let fixture: ComponentFixture<Lib17Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
