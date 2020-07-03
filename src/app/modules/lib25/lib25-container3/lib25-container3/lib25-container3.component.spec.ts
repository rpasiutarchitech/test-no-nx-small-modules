import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container3Component } from './lib25-container3.component';

describe('Lib25Container3Component', () => {
  let component: Lib25Container3Component;
  let fixture: ComponentFixture<Lib25Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
