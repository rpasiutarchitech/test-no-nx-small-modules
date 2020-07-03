import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22Container9Component } from './lib22-container9.component';

describe('Lib22Container9Component', () => {
  let component: Lib22Container9Component;
  let fixture: ComponentFixture<Lib22Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
