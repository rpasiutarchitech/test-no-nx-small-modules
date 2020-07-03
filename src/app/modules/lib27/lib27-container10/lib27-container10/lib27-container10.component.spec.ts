import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container10Component } from './lib27-container10.component';

describe('Lib27Container10Component', () => {
  let component: Lib27Container10Component;
  let fixture: ComponentFixture<Lib27Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
