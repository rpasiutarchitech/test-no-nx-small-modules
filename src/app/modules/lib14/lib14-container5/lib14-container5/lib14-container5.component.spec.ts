import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14Container5Component } from './lib14-container5.component';

describe('Lib14Container5Component', () => {
  let component: Lib14Container5Component;
  let fixture: ComponentFixture<Lib14Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
