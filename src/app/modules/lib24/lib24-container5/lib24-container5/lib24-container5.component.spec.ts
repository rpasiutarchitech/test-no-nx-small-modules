import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Container5Component } from './lib24-container5.component';

describe('Lib24Container5Component', () => {
  let component: Lib24Container5Component;
  let fixture: ComponentFixture<Lib24Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
