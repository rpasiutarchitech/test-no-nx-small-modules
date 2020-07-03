import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container4Component } from './lib27-container4.component';

describe('Lib27Container4Component', () => {
  let component: Lib27Container4Component;
  let fixture: ComponentFixture<Lib27Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
