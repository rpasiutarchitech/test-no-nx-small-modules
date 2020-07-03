import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container3Component } from './lib17-container3.component';

describe('Lib17Container3Component', () => {
  let component: Lib17Container3Component;
  let fixture: ComponentFixture<Lib17Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
