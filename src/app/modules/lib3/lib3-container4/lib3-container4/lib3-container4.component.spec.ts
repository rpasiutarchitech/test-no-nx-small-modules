import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container4Component } from './lib3-container4.component';

describe('Lib3Container4Component', () => {
  let component: Lib3Container4Component;
  let fixture: ComponentFixture<Lib3Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
