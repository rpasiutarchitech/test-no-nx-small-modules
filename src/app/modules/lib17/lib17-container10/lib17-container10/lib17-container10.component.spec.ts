import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container10Component } from './lib17-container10.component';

describe('Lib17Container10Component', () => {
  let component: Lib17Container10Component;
  let fixture: ComponentFixture<Lib17Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
