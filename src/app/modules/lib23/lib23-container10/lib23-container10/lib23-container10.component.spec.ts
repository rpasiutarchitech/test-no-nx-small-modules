import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container10Component } from './lib23-container10.component';

describe('Lib23Container10Component', () => {
  let component: Lib23Container10Component;
  let fixture: ComponentFixture<Lib23Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
