import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container2Component } from './lib4-container2.component';

describe('Lib4Container2Component', () => {
  let component: Lib4Container2Component;
  let fixture: ComponentFixture<Lib4Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
