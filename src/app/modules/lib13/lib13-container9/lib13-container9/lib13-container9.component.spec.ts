import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13Container9Component } from './lib13-container9.component';

describe('Lib13Container9Component', () => {
  let component: Lib13Container9Component;
  let fixture: ComponentFixture<Lib13Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
