import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Container9Component } from './lib17-container9.component';

describe('Lib17Container9Component', () => {
  let component: Lib17Container9Component;
  let fixture: ComponentFixture<Lib17Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
