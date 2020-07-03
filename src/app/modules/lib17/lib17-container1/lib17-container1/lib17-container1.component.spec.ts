import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container1Component } from './lib17-container1.component';

describe('Lib17Container1Component', () => {
  let component: Lib17Container1Component;
  let fixture: ComponentFixture<Lib17Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
