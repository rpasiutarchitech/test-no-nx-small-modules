import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container5Component } from './lib23-container5.component';

describe('Lib23Container5Component', () => {
  let component: Lib23Container5Component;
  let fixture: ComponentFixture<Lib23Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
