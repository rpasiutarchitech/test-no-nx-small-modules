import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25Container9Component } from './lib25-container9.component';

describe('Lib25Container9Component', () => {
  let component: Lib25Container9Component;
  let fixture: ComponentFixture<Lib25Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
