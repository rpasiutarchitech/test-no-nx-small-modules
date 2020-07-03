import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container4Component } from './lib28-container4.component';

describe('Lib28Container4Component', () => {
  let component: Lib28Container4Component;
  let fixture: ComponentFixture<Lib28Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
