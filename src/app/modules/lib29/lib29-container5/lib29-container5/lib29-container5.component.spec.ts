import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Container5Component } from './lib29-container5.component';

describe('Lib29Container5Component', () => {
  let component: Lib29Container5Component;
  let fixture: ComponentFixture<Lib29Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
