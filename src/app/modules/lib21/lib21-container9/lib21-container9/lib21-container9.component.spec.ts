import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21Container9Component } from './lib21-container9.component';

describe('Lib21Container9Component', () => {
  let component: Lib21Container9Component;
  let fixture: ComponentFixture<Lib21Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
