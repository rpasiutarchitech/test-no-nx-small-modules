import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container5Component } from './lib25-container5.component';

describe('Lib25Container5Component', () => {
  let component: Lib25Container5Component;
  let fixture: ComponentFixture<Lib25Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
