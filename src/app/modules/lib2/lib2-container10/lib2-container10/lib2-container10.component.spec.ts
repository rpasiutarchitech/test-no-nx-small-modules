import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container10Component } from './lib2-container10.component';

describe('Lib2Container10Component', () => {
  let component: Lib2Container10Component;
  let fixture: ComponentFixture<Lib2Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
