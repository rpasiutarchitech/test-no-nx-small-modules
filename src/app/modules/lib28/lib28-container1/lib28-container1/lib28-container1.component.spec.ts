import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container1Component } from './lib28-container1.component';

describe('Lib28Container1Component', () => {
  let component: Lib28Container1Component;
  let fixture: ComponentFixture<Lib28Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
