import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container6Component } from './lib28-container6.component';

describe('Lib28Container6Component', () => {
  let component: Lib28Container6Component;
  let fixture: ComponentFixture<Lib28Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
