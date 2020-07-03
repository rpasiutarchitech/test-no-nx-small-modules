import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container5Component } from './lib16-container5.component';

describe('Lib16Container5Component', () => {
  let component: Lib16Container5Component;
  let fixture: ComponentFixture<Lib16Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
