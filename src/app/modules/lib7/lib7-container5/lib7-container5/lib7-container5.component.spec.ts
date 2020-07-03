import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Container5Component } from './lib7-container5.component';

describe('Lib7Container5Component', () => {
  let component: Lib7Container5Component;
  let fixture: ComponentFixture<Lib7Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
