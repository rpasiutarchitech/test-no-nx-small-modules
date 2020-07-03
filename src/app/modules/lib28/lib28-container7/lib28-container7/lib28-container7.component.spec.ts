import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container7Component } from './lib28-container7.component';

describe('Lib28Container7Component', () => {
  let component: Lib28Container7Component;
  let fixture: ComponentFixture<Lib28Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
