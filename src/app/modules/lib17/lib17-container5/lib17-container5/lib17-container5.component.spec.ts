import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container5Component } from './lib17-container5.component';

describe('Lib17Container5Component', () => {
  let component: Lib17Container5Component;
  let fixture: ComponentFixture<Lib17Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
