import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20Container9Component } from './lib20-container9.component';

describe('Lib20Container9Component', () => {
  let component: Lib20Container9Component;
  let fixture: ComponentFixture<Lib20Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
