import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2Container9Component } from './lib2-container9.component';

describe('Lib2Container9Component', () => {
  let component: Lib2Container9Component;
  let fixture: ComponentFixture<Lib2Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
