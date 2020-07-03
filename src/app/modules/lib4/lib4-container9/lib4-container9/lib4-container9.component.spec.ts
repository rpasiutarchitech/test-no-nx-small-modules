import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4Container9Component } from './lib4-container9.component';

describe('Lib4Container9Component', () => {
  let component: Lib4Container9Component;
  let fixture: ComponentFixture<Lib4Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
