import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Container9Component } from './lib10-container9.component';

describe('Lib10Container9Component', () => {
  let component: Lib10Container9Component;
  let fixture: ComponentFixture<Lib10Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
