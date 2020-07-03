import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container2Component } from './lib3-container2.component';

describe('Lib3Container2Component', () => {
  let component: Lib3Container2Component;
  let fixture: ComponentFixture<Lib3Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
