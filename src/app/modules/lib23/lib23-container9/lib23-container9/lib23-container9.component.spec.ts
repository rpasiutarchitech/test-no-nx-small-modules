import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Container9Component } from './lib23-container9.component';

describe('Lib23Container9Component', () => {
  let component: Lib23Container9Component;
  let fixture: ComponentFixture<Lib23Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
