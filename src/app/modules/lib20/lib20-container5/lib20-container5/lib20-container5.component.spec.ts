import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container5Component } from './lib20-container5.component';

describe('Lib20Container5Component', () => {
  let component: Lib20Container5Component;
  let fixture: ComponentFixture<Lib20Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
