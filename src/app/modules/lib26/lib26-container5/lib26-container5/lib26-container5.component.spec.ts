import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container5Component } from './lib26-container5.component';

describe('Lib26Container5Component', () => {
  let component: Lib26Container5Component;
  let fixture: ComponentFixture<Lib26Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
