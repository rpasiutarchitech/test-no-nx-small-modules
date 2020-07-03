import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container5Component } from './lib10-container5.component';

describe('Lib10Container5Component', () => {
  let component: Lib10Container5Component;
  let fixture: ComponentFixture<Lib10Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
