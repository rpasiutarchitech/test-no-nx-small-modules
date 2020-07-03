import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container4Component } from './lib23-container4.component';

describe('Lib23Container4Component', () => {
  let component: Lib23Container4Component;
  let fixture: ComponentFixture<Lib23Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
