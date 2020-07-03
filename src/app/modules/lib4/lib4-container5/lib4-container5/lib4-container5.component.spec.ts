import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container5Component } from './lib4-container5.component';

describe('Lib4Container5Component', () => {
  let component: Lib4Container5Component;
  let fixture: ComponentFixture<Lib4Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
