import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container7Component } from './lib3-container7.component';

describe('Lib3Container7Component', () => {
  let component: Lib3Container7Component;
  let fixture: ComponentFixture<Lib3Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
