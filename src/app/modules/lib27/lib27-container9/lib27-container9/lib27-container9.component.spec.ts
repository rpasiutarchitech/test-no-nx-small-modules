import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Container9Component } from './lib27-container9.component';

describe('Lib27Container9Component', () => {
  let component: Lib27Container9Component;
  let fixture: ComponentFixture<Lib27Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
