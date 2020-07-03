import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container5Component } from './lib27-container5.component';

describe('Lib27Container5Component', () => {
  let component: Lib27Container5Component;
  let fixture: ComponentFixture<Lib27Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
