import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container3Component } from './lib27-container3.component';

describe('Lib27Container3Component', () => {
  let component: Lib27Container3Component;
  let fixture: ComponentFixture<Lib27Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
