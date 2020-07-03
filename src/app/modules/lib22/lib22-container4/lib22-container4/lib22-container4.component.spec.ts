import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container4Component } from './lib22-container4.component';

describe('Lib22Container4Component', () => {
  let component: Lib22Container4Component;
  let fixture: ComponentFixture<Lib22Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
