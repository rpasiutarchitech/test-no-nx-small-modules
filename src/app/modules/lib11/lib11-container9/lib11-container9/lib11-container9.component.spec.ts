import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11Container9Component } from './lib11-container9.component';

describe('Lib11Container9Component', () => {
  let component: Lib11Container9Component;
  let fixture: ComponentFixture<Lib11Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
