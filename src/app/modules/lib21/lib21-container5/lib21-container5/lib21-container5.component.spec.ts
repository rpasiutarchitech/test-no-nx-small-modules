import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container5Component } from './lib21-container5.component';

describe('Lib21Container5Component', () => {
  let component: Lib21Container5Component;
  let fixture: ComponentFixture<Lib21Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
