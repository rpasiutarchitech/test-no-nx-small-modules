import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8Container5Component } from './lib8-container5.component';

describe('Lib8Container5Component', () => {
  let component: Lib8Container5Component;
  let fixture: ComponentFixture<Lib8Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
