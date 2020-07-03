import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container5Component } from './lib11-container5.component';

describe('Lib11Container5Component', () => {
  let component: Lib11Container5Component;
  let fixture: ComponentFixture<Lib11Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
