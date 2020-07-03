import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container10Component } from './lib28-container10.component';

describe('Lib28Container10Component', () => {
  let component: Lib28Container10Component;
  let fixture: ComponentFixture<Lib28Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
