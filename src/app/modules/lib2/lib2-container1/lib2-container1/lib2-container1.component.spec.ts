import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container1Component } from './lib2-container1.component';

describe('Lib2Container1Component', () => {
  let component: Lib2Container1Component;
  let fixture: ComponentFixture<Lib2Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
