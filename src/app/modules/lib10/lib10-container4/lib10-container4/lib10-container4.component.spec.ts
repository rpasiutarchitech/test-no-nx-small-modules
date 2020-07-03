import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container4Component } from './lib10-container4.component';

describe('Lib10Container4Component', () => {
  let component: Lib10Container4Component;
  let fixture: ComponentFixture<Lib10Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
