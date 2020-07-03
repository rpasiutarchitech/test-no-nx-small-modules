import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Container5Component } from './lib12-container5.component';

describe('Lib12Container5Component', () => {
  let component: Lib12Container5Component;
  let fixture: ComponentFixture<Lib12Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
