import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container5Component } from './lib22-container5.component';

describe('Lib22Container5Component', () => {
  let component: Lib22Container5Component;
  let fixture: ComponentFixture<Lib22Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
