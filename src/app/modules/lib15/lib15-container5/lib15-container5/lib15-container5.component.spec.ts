import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container5Component } from './lib15-container5.component';

describe('Lib15Container5Component', () => {
  let component: Lib15Container5Component;
  let fixture: ComponentFixture<Lib15Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
