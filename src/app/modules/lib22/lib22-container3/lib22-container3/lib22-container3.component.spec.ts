import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container3Component } from './lib22-container3.component';

describe('Lib22Container3Component', () => {
  let component: Lib22Container3Component;
  let fixture: ComponentFixture<Lib22Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
