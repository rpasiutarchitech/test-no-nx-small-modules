import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Container5Component } from './lib18-container5.component';

describe('Lib18Container5Component', () => {
  let component: Lib18Container5Component;
  let fixture: ComponentFixture<Lib18Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
