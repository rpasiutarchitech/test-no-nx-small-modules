import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Container9Component } from './lib15-container9.component';

describe('Lib15Container9Component', () => {
  let component: Lib15Container9Component;
  let fixture: ComponentFixture<Lib15Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
