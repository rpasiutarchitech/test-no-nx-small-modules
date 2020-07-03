import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container2Component } from './lib6-container2.component';

describe('Lib6Container2Component', () => {
  let component: Lib6Container2Component;
  let fixture: ComponentFixture<Lib6Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
