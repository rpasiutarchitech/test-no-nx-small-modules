import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container4Component } from './lib17-container4.component';

describe('Lib17Container4Component', () => {
  let component: Lib17Container4Component;
  let fixture: ComponentFixture<Lib17Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
