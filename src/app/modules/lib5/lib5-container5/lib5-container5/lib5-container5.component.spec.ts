import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5Container5Component } from './lib5-container5.component';

describe('Lib5Container5Component', () => {
  let component: Lib5Container5Component;
  let fixture: ComponentFixture<Lib5Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
