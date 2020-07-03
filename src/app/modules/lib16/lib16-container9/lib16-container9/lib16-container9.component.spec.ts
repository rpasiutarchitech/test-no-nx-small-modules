import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Container9Component } from './lib16-container9.component';

describe('Lib16Container9Component', () => {
  let component: Lib16Container9Component;
  let fixture: ComponentFixture<Lib16Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
