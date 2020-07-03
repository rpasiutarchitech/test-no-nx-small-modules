import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container7Component } from './lib19-container7.component';

describe('Lib19Container7Component', () => {
  let component: Lib19Container7Component;
  let fixture: ComponentFixture<Lib19Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
