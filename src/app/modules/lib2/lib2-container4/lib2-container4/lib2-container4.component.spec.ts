import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container4Component } from './lib2-container4.component';

describe('Lib2Container4Component', () => {
  let component: Lib2Container4Component;
  let fixture: ComponentFixture<Lib2Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
