import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container5Component } from './lib13-container5.component';

describe('Lib13Container5Component', () => {
  let component: Lib13Container5Component;
  let fixture: ComponentFixture<Lib13Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
