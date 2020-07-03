import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container4Component } from './lib25-container4.component';

describe('Lib25Container4Component', () => {
  let component: Lib25Container4Component;
  let fixture: ComponentFixture<Lib25Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
