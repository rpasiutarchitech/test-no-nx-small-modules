import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Container9Component } from './lib26-container9.component';

describe('Lib26Container9Component', () => {
  let component: Lib26Container9Component;
  let fixture: ComponentFixture<Lib26Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
