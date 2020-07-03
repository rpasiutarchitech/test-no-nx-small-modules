import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container3Component } from './lib2-container3.component';

describe('Lib2Container3Component', () => {
  let component: Lib2Container3Component;
  let fixture: ComponentFixture<Lib2Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
