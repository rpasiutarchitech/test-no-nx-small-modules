import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container1Component } from './lib22-container1.component';

describe('Lib22Container1Component', () => {
  let component: Lib22Container1Component;
  let fixture: ComponentFixture<Lib22Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
