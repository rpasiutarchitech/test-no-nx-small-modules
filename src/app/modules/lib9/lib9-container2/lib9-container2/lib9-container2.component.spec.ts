import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container2Component } from './lib9-container2.component';

describe('Lib9Container2Component', () => {
  let component: Lib9Container2Component;
  let fixture: ComponentFixture<Lib9Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
