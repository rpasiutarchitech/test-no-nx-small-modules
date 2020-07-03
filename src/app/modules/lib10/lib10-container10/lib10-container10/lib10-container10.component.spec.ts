import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container10Component } from './lib10-container10.component';

describe('Lib10Container10Component', () => {
  let component: Lib10Container10Component;
  let fixture: ComponentFixture<Lib10Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
